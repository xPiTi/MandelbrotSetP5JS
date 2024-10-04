#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

uniform vec2 u_center;
uniform float u_zoom;
uniform int u_itr;
    
vec4 map_to_color(float t) {
    float r = 9.0 * (1.0 - t) * t * t * t;
    float g = 15.0 * (1.0 - t) * (1.0 - t) * t * t;
    float b = 8.5 * (1.0 - t) * (1.0 - t) * (1.0 - t) * t;

    return vec4(r, g, b, 1.0);
}

void main() {
    const int MAX_ITER = 10000;
    // vec2 u_center = vec2(-0.590,-0.450);
    // float u_zoom = 0.0020;
    // int u_itr = 1000;
    
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
    vec2 c = uv * u_zoom + u_center;
    
    vec2 z = vec2(0.0, 0.0);
    int iter = 0;
    
    for(int i=0; i<MAX_ITER; i++){
        if(i >= u_itr) break;
        
        z = vec2(
        	z.x * z.x - z.y * z.y + c.x,
        	2.0 * z.x * z.y + c.y
        );
        
        if(dot(z, z) > 4.0){
            break;
        }
        
        iter = i;
    }
    
    float color = float(iter) / float(u_itr);
    gl_FragColor = map_to_color(float(color));
}