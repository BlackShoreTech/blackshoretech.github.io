---
title: 'Creating Trusted Local SSL certs for development'
date: May 9, 2022
excerpt: ''
cover_image: 'https://blog.brendanscullion.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1652122318052%2Fs6pEYdBc6.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
---

**NOTE**: This article to assumes you have NGINX and local DNS configure correctly if not check out [this article](TBC) to get started. 

If you're building web applications, then you've probably run into this before. You need to run your local environment over HTTPS because you're connecting to some third party API (maybe Facebook login etc.). You create an SSL cert, add it to your NGINX config, open your browser and bypass the `NET::ERR_CERT_AUTHORITY_INVALID` warning. 

Next you can't connect to the local back-end server instance because it's also not trusted. You can't be arsed finding the commands  and creating a new ssl cert so you use the same one or maybe you're only using the snakeoil cert that comes with the OS. 

This works fine but you're still going to be annoyed by the browser warnings, and if you're using websockets then it's an even bigger hassle. Repeat all this for every project you're working on, and every domain it uses. It adds up. It's not the biggest issue in the world but it's enough to be annoying. 
Also, getting rid of the  'NOT Secure' warning in the URL bar is surprisingly refreshing. 

### So lets look at what we can do about it? 
1. Create a local certificate authority (CA)
2. Create SSL certs for each project and sign them using this CA
3. Add this CA to your browsers trusted authorities
4. Create new certs signed by the same CA for other projects


Luckily for you I've put together this handy bash script to add to your arsenal. It's available on my [Github](https://github.com/brsc2909/makecrt) but or convenience you can just download it directly
```bash
curl --location -O https://raw.githubusercontent.com/brsc2909/makecrt/main/makecrt && chmod +x makecrt
```

### how do I use it ?
I've made this as simple as possible. All you need to do is run the script as root and pass the domains as arguments. you need to specify each domain that this cert will be used with. ( I usually create a separate cert per project).
```bash
sudo ./makecert --domains local-app.connectmor.io local-api.connectmor.io
```
```
Creating extfile
Creating certificate for local-app.connectmor.io
Signature ok
subject=C = IE, ST = Leinster, L = DUBLIN, O = Local CA beast, OU = IT, CN = local-app.connectmor.io
Getting CA Private Key
NGINX config:
ssl_certificate_key  /etc/ssl/private/local-app.connectmor.io.key;
ssl_certificate  /etc/ssl/certs/local-app.connectmor.io.crt;
```
And that's it. You can use the NGINX config at the end of the output to update your config. 

### Adding the CA to my browser. (You'll only need to do this once)
Each browser is slightly different follow the same principals. Below is how to do it on Chrome or any other chromium based browser (Vivaldi e.t.c) 
1. 
![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1652125391640/7NQWoiBZ1.png)

2. 
![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1652125473843/iupVSej0a.png)

3. 
![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1652125503497/t8tyAeiD9.png)

4. Add the CA cert you just created. If you used all the defaults then it will be located at `/etc/ssl/cers/myLocalRootCA.crt`
![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1652125561567/6FkHCGxPq.png)
 
5. Tell the browser to trust this for identifying websites
![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1652125608021/MLdJL3Rcp.png)

6. You can then check your domain in the list of trusted authorities. Mine looks like this
![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1652125654184/bEFG9J0G_.png)

7. Ah now that is nice
![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1652126779824/NC56aODb_.png)

### Custom config
depending on your OS you might need to edit the script slightly. For example if your ssl certs are not stores in `/etc/ssl/`.
You have two options here:
1. You can specify the options each time you run the command. use the `--help` option to view the list of commands.

```
Usage: ./makecrt -d [domain1, domain2...] [options]
 
options:
-h, --help           show brief help
-d, --domains <DOMAIN1 DOMAIN2...> Specify domain for which the cert will be used on
     --days          Specify how long the cert is valid for. default: 3650
     --CA            Specify a local CA. default: /etc/ssl/certs/myLocalRootCA.crt
     --CAkey         Specify a local CA private key. default: /etc/ssl/private/myLocalRootCA.key
-pd, --private-dir   Specify private key dir. default: /etc/ssl/private
-cd, --cert-dir      Specify certificate dir. default: /etc/ssl/certs
-e, --eliptic-curve  Specify what type of eliptic curve to use. Default: prime256v1
 
Example:
./makecrt -d example.com blog.example.com
```
2. Edit the default Values in the script. (This probably makes the most sense)

```bash
# You can change these default values to suit
DAYS=3650

CERT_DIR=/etc/ssl/certs
PRIVATE_KEY_DIR=/etc/ssl/private

e_curve=prime256v1
localRootCA=$CERT_DIR/myLocalRootCA.crt
localRootCAkey=$PRIVATE_KEY_DIR/myLocalRootCA.key

EXTFILE=/tmp/_v3.ext

ORG="Local CA $(hostname)"
ORG_UNIT="IT"
COUNTY="DUBLIN"
STATE="Leinster"
COUNTRY="IE"
```