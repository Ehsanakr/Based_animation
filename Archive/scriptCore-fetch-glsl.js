
const sectionOne = document.getElementById("home").offsetTop;
const sectionTwo = document.getElementById("reachus").offsetTop;

const homeBtn = document.getElementById("homeBtn");
const scrollDownElement = document.getElementById("scrollDown-wrapper");


$("#scrollDown-wrapper").on("click", function () {
  if (window.scrollY >= sectionTwo / 2.0) {
    $("html, body").animate(
      {
        scrollTop: $("#home").offset().top,
      },
      1500
    );
  } else{
    $("html, body").animate(
      {
        scrollTop: $("#reachus").offset().top,
      },
      1500
    );
  }
});


//---scrollbar style---↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var dh = $(document).height();
  var wh = $(window).height();
  var scrollPercent = (scroll / (dh - wh)) * wh;
  $("#progressbar").css("height", scrollPercent + "px");
});

$(document).ready(function () {
  $("html, body").animate(
    {
      scrollTop: $("#home").offset().top,
    },
    1500
  );

  const sectionOffsets = {};

  // Store offsets of all sections with id starting with "section"
  $("[id^='section']").each(function () {
    sectionOffsets[$(this).attr("id")] = $(this).offset().top;
  });
});

$("#homeBtn").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: $("#home").offset().top,
    },
    1500
  );
});

//---THREE.JS---↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
let camera, scene, renderer, uniforms, scrollProgress;

init();
animate();

function init() {
  const container = document.getElementById("webGLID");

  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  scene = new THREE.Scene();

  const geometry = new THREE.PlaneGeometry(2, 2);

  uniforms = {
    isResp: { value: true }, // Adding boolean value
    iTime: { value: 0.0 },
    iResolution: { type: "v2", value: new THREE.Vector2() },
    iMouse: { type: "v2", value: new THREE.Vector2() },
    iAnimProgress_1: { type: "v3", value: new THREE.Vector3() },
  };
  // Vertex shader
  const vertexShaderCode = "void main() {gl_Position = vec4(position, 1.0);}";
  // Fetch the content of the fragment shader file
  fetch(
    "https://cdn.jsdelivr.net/gh/User22807/Based_animation@main/SYMMIO_files/fragmentShader_mob.glsl"
  )
    .then((response) => response.text())
    .then((fragShaderCode) => {
      const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShaderCode,
        fragmentShader: fragShaderCode, // Use the content fetched from the file
      });

      var mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // ... (rest of your init() function)
    });

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  uniforms.iResolution.value.x = window.innerWidth * window.devicePixelRatio;
  uniforms.iResolution.value.y = window.innerHeight * window.devicePixelRatio;

  renderer.setSize(window.innerWidth, window.innerHeight);
}
// Update mouse position uniform
function handleMouseMove(event) {
  uniforms.iMouse.value.x = event.clientX / window.innerWidth - 0.5;
  uniforms.iMouse.value.y = event.clientY / window.innerHeight;
}

function animate() {
  requestAnimationFrame(animate);

  // Update time
  uniforms["iTime"].value = performance.now() / 1000;

  // Update resolution if needed
  uniforms.iResolution.value.x = window.innerWidth * window.devicePixelRatio;
  uniforms.iResolution.value.y = window.innerHeight * window.devicePixelRatio;

  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.render(scene, camera);
}

//---GSAP---↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
gsap.to(uniforms.iAnimProgress_1.value, {
  x: 1,
  scrollTrigger: {
    trigger: "#home",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});

gsap.to(uniforms.iAnimProgress_1.value, {
  y: 1,
  scrollTrigger: {
    trigger: "#reachus",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
