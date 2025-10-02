varying vec3 vUv;
varying float vTime;
varying float vZ;
uniform sampler2D particleTexture;

float map(float value, float oldMin, float oldMax, float newMin, float newMax) {
    return newMin + (newMax - newMin) * (value - oldMin) / (oldMax - oldMin);
}


void main()
{
    float alpha = map(vZ / 2., -1. / 2., 30. / 2., 0.02, 0.15); 
    vec3 color = vec3(0.6, 0.6, 0.6);

    gl_FragColor = vec4( color, alpha);
    gl_FragColor = gl_FragColor * texture2D( particleTexture, gl_PointCoord );
}