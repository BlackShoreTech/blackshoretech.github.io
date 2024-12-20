import * as THREE from 'three'
import vertex from './vertex.glsl?raw'
import fragment from './fragment.glsl?raw'

export class Scene {
    constructor(options) {
        this.$el = options.el;
        this.time = 0;

        this.bindAll();
        this.init();
    }
    
    bindAll() {
        this.render = this.render.bind(this);
        this.resize = this.resize.bind(this);
    }
    
    init() {
        this.textureLoader = new THREE.TextureLoader();
        this.camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 2000 );
        this.camera.position.z = 350;
        this.camera.position.y = 200;
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.$el.appendChild( this.renderer.domElement );
        

        this.createParticles();
        this.bindEvents();
        this.resize();
        this.render();
    }
    
    createParticles() {        
        const plane = new THREE.PlaneGeometry(800, 250, 250, 125);
        
        const textureLoader = new THREE.TextureLoader();
        textureLoader.crossOrigin = '';
        
        const material = new THREE.ShaderMaterial( {
            uniforms: {
                time: { value: 1.0 },
                particleTexture:   { value: textureLoader.load( "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1081752/spark1.png" ) },
                resolution: { value: new THREE.Vector2() }

            },

            vertexShader: vertex,
            fragmentShader: fragment,
            blending: THREE.AdditiveBlending,
            depthTest: false,
            transparent: true

        } );
        
        
        this.particles = new THREE.Points( plane, material );
        this.particles.rotation.x = this.degToRad(-90);

        this.scene.add(this.particles);
    }

    
    bindEvents() {
        // window.addEventListener('mousemove', this.mousemove);
        window.addEventListener('resize', this.resize);
    }

    
    resize() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        this.renderer.setSize(w,h);
        this.camera.aspect = w/h;
        this.camera.updateProjectionMatrix();
    }
    
    moveParticles() {
        this.particles.material.uniforms.time.value = this.time;
        // this.particles.material.needsUpdate = true;
    }

    // Animations
    
    render() {
        requestAnimationFrame(this.render);
        this.time += .01;
     
        this.moveParticles();
        this.renderer.render(this.scene, this.camera);
    }
    
    // Utils
    degToRad(angle) {
        return angle * Math.PI / 180;
    }
    
}
