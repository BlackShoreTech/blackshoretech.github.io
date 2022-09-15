---
title: Frontend-only contact form (React (nextJS)+ Google Forms)
date: September 13, 2022
author: Brendan
excerpt: 'My initial thought was to go super simple and just add a link to a google form but this seemed a bit too clunky for a professional site. 
The next thought was can I embed the form,'
cover_image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1663106253339/XoEuZpPvv.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
---
I recently created a simple NextJS landing page for my contracting business and decided to host it using GitHub pages, Which is great because it's free and easy to implement. However, it doesn't come with any backend. Keeping with the themes of "free" and "simple" I was looking for some way to add a contact form to the site that doesn't require any backend. 

My initial thought was to go super simple and just add a link to a google form but this seemed a bit too clunky for a professional site. 
The next thought was can I embed the form, and It was through googling this that I came across this fantastic package ([react-google-forms-hooks](https://www.npmjs.com/package/react-google-forms-hooks)). This is exactly what I wanted. I can use my own custom components and layout to give the form a more cohesive look.

## Creating the Google Form
The first thing I do is create the actual form. In my case, it's just a simple form with Email, Subject, and Message fields

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663098704226/MOfs-3MZR.png)

To make sure I'm alerted when someone uses the form I've enabled email notifications

1. Click the three dots             |  2. Enable email notifications
:-------------------------:|:-------------------------:
![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663098940286/iTkAY7l-8.png)  | ![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663098959262/NU5UfTiGs.png)

I also need to make sure the form doesn't require sign in

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663099306975/RGdVW8SJ4.png)

## Adding the Form to NextJS Project
Now that the form is created, there are a couple of things I need to do before creating the components
#### Firstly I need to install the Package
```bash
npm install --save react-google-forms-hooks
```
#### Now we need to save the details of the google form to a JSON file
I'm using the function provided by the package. I found running it like this from the terminal to be the easiest as I don't run into any cors errors.
```bash
node -e 'require("react-google-forms-hooks").googleFormsToJson("https://docs.google.com/forms/d/e/[formid]/viewform").then((data) =>  console.log(data))' > src/data/GoogleForm.json
```
**Note** : You'll have to go to the file after it's created and make sure the JSON is correctly quoted etc.

#### That's all the setup done. The next thing to do is put together the components. 
My form is just text fields so all I need is input components for a short answer field and a long answer field. I already have a custom component created for TextInput and TextAreaInput so I'll be using these.

You'll see below that I went for the simpler method of just copying the field ids into the components. If you want to be fancy you could map over the fields array and create the form dynamically. Or why not add some input validation? Go wild

```ts
import {
  useShortAnswerInput,
  useLongAnswerInput,
  useGoogleForm,
  GoogleFormProvider,
} from 'react-google-forms-hooks';

import { Button } from '../components/Button';
import { TextAreaInput } from '../components/TextAreaInput';
import { TextInput } from '../components/TextInput';
import { Section } from '../layout/Section';
import form from '../data/GoogleForm.json';

type IFormInputs = {
  id: string;
  type: 'text' | 'email' | 'tel';
};

const ShortAnswerInput = ({ id, type }: IFormInputs) => {
  const { register, label } = useShortAnswerInput(id);

  return <TextInput type={type} label={label} {...register()} />;
};

const LongAnswerInput = ({ id, type }: IFormInputs) => {
  const { register, label } = useLongAnswerInput(id);

  return <TextAreaInput type={type} label={label} {...register()} />;
};

const Contactform = () => {
  // @ts-ignore
  const methods = useGoogleForm({ form });

  const onSubmit = async (data: any) => {
    await methods.submitToGoogleForms(data).then(() => {
      // eslint-disable-next-line no-alert
      alert('Form submitted with success!');
    });
  };
  return (
    <Section>
      <GoogleFormProvider {...methods}>
        <form id="ContactForm" onSubmit={methods.handleSubmit(onSubmit)}>
          <ShortAnswerInput id="1234567890" type="email" />
          <ShortAnswerInput id="1234567891" type="text" />
          <LongAnswerInput id="1234567892" type="text" />

          <Button type="submit" className="mt-2">
            Submit
          </Button>
        </form>
      </GoogleFormProvider>
    </Section>
  );
};

export { Contactform };
```
#### Great now I have a Contact form that I can easily add to my site. Hopefully, it gets used 😁
You've made it this far might as well check it out
[https://www.blackshoretech.com/](https://www.blackshoretech.com/)

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663103948377/zB84AlL6L.png)