// shader.vert
attribute vec3 aPosition;

void main() {
    // Send the vertex positions to the fragment shader
    gl_Position = vec4(aPosition-0.5, 0.5);
    //gl_Position = vec4(aPosition, 1.0);
}
