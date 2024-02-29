uniform vec2 iResolution;
uniform float iTime;
uniform vec2 iMouse;
uniform vec3 iAnimProgress_1;
float introTime = float(2.5);
float iAnimIntro;
// Includes and constants
#define SCA(a)      vec2(sin(a), cos(a))
#define HSV2RGB_K  vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0)
#define HSV2RGB(c) (c.z * mix(HSV2RGB_K.xxx, clamp(abs(fract(c.xxx + HSV2RGB_K.xyz) * 6.0 - HSV2RGB_K.www) - HSV2RGB_K.xxx, 0.0, 1.0), c.y))
   // Function for finding the intersection of a ray with a plane
float rayPlane(vec3 ro, vec3 rd, vec4 p) {
    return -(dot(ro, p.xyz) + p.w) / dot(rd, p.xyz);
}
    // Function for rendering the outer sky
vec3 outerSkyRender(vec3 ro, vec3 rd) {
    vec3 center = ro + vec3(-100.0, 40.0, 100.0);
    vec4 sdim = vec4(center, 50);
    const vec3 pn = normalize(vec3(0., 1.0, -0.8));
    vec4 pdim = vec4(pn, -dot(pn, center));
    float ri = rayPlane(ro, rd, pdim);

    vec3 col = HSV2RGB(vec3(1.0, 0.00, 0.008));
    // Sun add to col
  // Horizon light modifier
    vec3 gcol = min(vec3(.02, .01, .01) * max((iTime * 0.03 - 0.01), 0.0), vec3(.025, .0125, .0125) * 0.35);
    gcol = gcol * 0.5;

    // Atmosphere air color
    col += vec3(.07, .07, .07) * min((iTime * introTime * 0.3 - 0.15), 1.0);
    col += gcol / max(abs(rd.y), 0.0);

    return col;
}

    // Function for rendering the ground
vec3 groundRender(vec3 col, vec3 ro, vec3 rd) {
    const vec3 gpn = normalize(vec3(0.0, 1.0, 0.0));
    const vec4 gpdim = vec4(gpn, 0.0);
    float gpd = rayPlane(ro, rd, gpdim);

    if(gpd < 0.0) {
        return col;

    }

    // Tiles reflection modifier
    vec3 gp = ro + rd * gpd;
    float gpfre = 1.15 + dot(rd, gpn);
    gpfre *= gpfre;
    gpfre *= gpfre;

    vec3 grr = reflect(rd, gpn);

    vec2 ggp = gp.xz;
    ggp.y += iTime * 0.8;
    float dfy = dFdy(ggp.y);
    float gcf = sin(ggp.x) * sin(ggp.y);
    vec2 ggn;

    // Calculate the modulus
    vec2 c = floor(ggp);
    ggp = mod(ggp + vec2(0.5), vec2(1.0)) - vec2(0.5);
    ggn = c;

    float ggd = min(abs(ggp.x), abs(ggp.y));

    // Tiles lines color modifier
    vec3 gcol = HSV2RGB(vec3(0.01 * gcf, 0.7, 0.005 * min(iTime, 1.0)));

    vec3 rcol = outerSkyRender(grr, grr);

    rcol *= 1.0;
        // Tiles calculations
    col = gcol / max(ggd, 0.0 + 0.25 * dfy) * exp(-0.25 * gpd);

        // Ground horizon reflection color filter
    rcol += HSV2RGB(vec3(0.0, 0.0, 0.0));
        // Ground reflection factor
    col += rcol * gpfre / 2.0;
    return col;
}

void main() {
    const float fov = 2.0;

    vec3 ro;  // Camera location
    vec3 la;  // Camera look at
    if(iResolution.x > 950.0 && iResolution.x > iResolution.y) {
            // Camera location right - left
        ro = vec3(0.0 ,
            //Camera location up - down
        0.5 ,
            //Camera location forth - back
        -7.0 + iAnimProgress_1.x * 7.5);
            // Camera look right - left
        la = vec3(max((5.0 - iTime * introTime), 0.0) ,
            // Camera look up - down
        1.15 ,
            // Camera look forth - back
         10.0);
            // -------------------Small screen mode
    } else {
            // Camera location right - left
        ro = 1.0 * vec3(0.0,
            //Camera location up - down
        0.5,            //Camera location forth - back
        -12.0 + iAnimProgress_1.x * 11.5); 
            // Camera look right - left
        la = vec3(max((0.5 - iTime * introTime/5.0), 0.0) ,
            // Camrea look up - down
        1.0 - iAnimProgress_1.x * 0.45,
            // Camrea look forth - back
        0.0);
    };
    vec3 up = vec3(0.0, 1.0, 0.0);           // Up vector
            // Calculate camera coordinate system
    vec3 ww = normalize(la - ro);
    vec3 uu = normalize(cross(ww, vec3(0.0, 1.0, 0.0)));
    vec3 vv = cross(uu, ww);
    vec2 q = (gl_FragCoord.xy / iResolution.xy - 0.5) * 2.0;
    vec2 p = q * vec2(iResolution.x / iResolution.y, 1.0);
            // Calculate ray direction
    vec3 rd = normalize(-p.x * uu + p.y * vv + fov * ww);
            // Rendering process
    vec3 col = outerSkyRender(rd, rd);
    col = groundRender(col, ro, rd);

    gl_FragColor = vec4(col, 1.0);

}
