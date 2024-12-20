varying vec3 vUv;
varying float vTime;
varying float vZ;
uniform sampler2D particleTexture;

float map(float value, float oldMin, float oldMax, float newMin, float newMax) {
    return newMin + (newMax - newMin) * (value - oldMin) / (oldMax - oldMin);
}


void main()
{
    vec3 colorA = vec3(0.1, 0.2, 0.8);
    vec3 colorB = vec3(0.2, 0.4, 0.9);
    //vec3 color = mix(colorA, colorB, vUv.x * vUv.y);
    float alpha = map(vZ / 2., -1. / 2., 30. / 2., 0.17, 1.); 
    vec3 color = vec3(0.15, 0.8, 0.8);

    gl_FragColor = vec4( color, alpha);
    gl_FragColor = gl_FragColor * texture2D( particleTexture, gl_PointCoord );
}