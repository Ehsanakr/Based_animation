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
    iAnimTimer: { value: 0.0 },
    iClick: { value: 1.0 },
    iTime: { value: 1.0 },
    iResolution: { type: "v2", value: new THREE.Vector2() },
    iMousePos: { type: "v2", value: new THREE.Vector2() },
    iAnimProgress_1: { type: "v3", value: new THREE.Vector3() },
    iAnimProgress_2: { type: "v3", value: new THREE.Vector3() },
  };
  // Vertex shader
  const vertexShaderCode = "void main() {gl_Position = vec4(position, 1.0);}";
  // Fetch the content of the fragment shader file
  fetch("./fragmentShader.glsl")
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
  uniforms.iMousePos.value.x = event.clientX;
  uniforms.iMousePos.value.y = window.innerHeight - event.clientY;
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

//---LIST COUNTER---↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
let counter = 0;
let counterInterval = null;

// Start counting function
function startCounter(targetValue, speed = 2) {
  clearInterval(counterInterval); // Clear existing interval
  counterInterval = setInterval(() => {
    const step = speed;
    const direction = targetValue > counter ? 1 : -1;

    if (Math.abs(counter - targetValue) >= step) {
      counter += step * direction;

      // Update colors based on the counter value
      updateColors();
      setScrollPerc(counter);

      uniforms.iAnimTimer.value = counter;
    } else {
      // Stop the interval when reaching the target value
      counter = targetValue;
      updateColors();
      uniforms.iAnimTimer.value = counter;
      clearInterval(counterInterval);
    }
  }, 50); // Adjust the interval duration as needed
}

// Reset and stop counting function
function resetCounter() {
  clearInterval(counterInterval); // Stop the counter interval
  counterInterval = null; // Set counterInterval to null
  // Reset colors to the initial state
  updateColors();
}

// Function to check conditions and start/stop counting
function animCounter() {
  // Check if iAnimProgress_1.x is more than 0.1 and iAnimProgress_1.y is less than 0.9
  if (
    uniforms.iAnimProgress_1.value.x > 0.1 &&
    uniforms.iAnimProgress_1.value.y < 0.9
  ) {
    // Start counting if not already counting
    if (!counterInterval) {
      startCounter(400); // Set the initial target value
    }
  } else {
    // Reset and stop counting if conditions are not met
    resetCounter();
  }
}

const progress = document.querySelector(".progress");

function setScrollPerc(percentage) {
  progress.style.strokeDashoffset = 264 - (percentage / 800) * 264;
}

const playToggle = document.querySelector(".control");
playToggle.addEventListener("click", function () {
  playToggle.classList.toggle("play");
  playToggle.classList.toggle("pause");

  if (playToggle.classList.contains("play")) {
    resetCounter();
    // Stop auto-scrolling, scroll to top, and restart auto-scrolling
  } else {
    startCounter(400); // Set the initial target value
    // Start auto-scrolling
  }
});

//---GSAP---↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
gsap.to(uniforms.iAnimProgress_1.value, {
  x: 1,
  scrollTrigger: {
    trigger: "#home",
    start: "0%",
    end: "100%",
    scrub: true,
    onUpdate: animCounter,
  },
});

gsap.to(uniforms.iAnimProgress_1.value, {
  y: 1,
  scrollTrigger: {
    trigger: "#howItWorks1",
    start: "0%",
    end: "100%",
    scrub: true,
    onUpdate: animCounter,
  },
});

gsap.to(uniforms.iAnimProgress_1.value, {
  z: 1,
  scrollTrigger: {
    trigger: "#howItWorks2",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});

gsap.to(uniforms.iAnimProgress_2.value, {
  x: 1,
  scrollTrigger: {
    trigger: "#howItWorks3",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
gsap.to(uniforms.iAnimProgress_2.value, {
  y: 1,
  scrollTrigger: {
    trigger: "#reachus",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});

// Intro animation timeline
const introTimeline = gsap.timeline();
introTimeline.from(uniforms.iAnimProgress_2.value, {
  z: 2,
  duration: 3.0,
});

const listItem0 = document.getElementById("listItem0");
const listItem1 = document.getElementById("listItem1");
const listItem2 = document.getElementById("listItem2");
const listItem3 = document.getElementById("listItem3");
const listItem4 = document.getElementById("listItem4");
const listItem5 = document.getElementById("listItem5");
const listItem6 = document.getElementById("listItem6");

listItem0.addEventListener("click", function () {
  startCounter(1,30); // Set the initial target value
  playToggle.classList.remove("play");
  playToggle.classList.add("pause");
});
listItem1.addEventListener("click", function () {
  startCounter(100, 9); // Set the initial target value and speed
  playToggle.classList.remove("play");
  playToggle.classList.add("pause");
});
listItem2.addEventListener("click", function () {
  startCounter(150, 9); // Set the initial target value and speed
  playToggle.classList.remove("play");
  playToggle.classList.add("pause");
});
listItem3.addEventListener("click", function () {
  startCounter(200, 9); // Set the initial target value and speed
  playToggle.classList.remove("play");
  playToggle.classList.add("pause");
});
listItem4.addEventListener("click", function () {
  startCounter(250, 9); // Set the initial target value and speed
  playToggle.classList.remove("play");
  playToggle.classList.add("pause");
});
listItem5.addEventListener("click", function () {
  startCounter(300, 9); // Set the initial target value and speed
  playToggle.classList.remove("play");
  playToggle.classList.add("pause");
});
listItem6.addEventListener("click", function () {
  startCounter(350, 9); // Set the initial target value and speed
  playToggle.classList.remove("play");
  playToggle.classList.add("pause");
});

// Update colors based on the counter value
function updateColors() {
  if (counter > 50 && counter <= 100) {
    listItem1.classList.add("red");
  } else {
    listItem1.classList.remove("red");
  }

  if (counter > 100 && counter <= 150) {
    listItem2.classList.add("red");
  } else {
    listItem2.classList.remove("red");
  }

  if (counter > 150 && counter <= 200) {
    listItem3.classList.add("red");
  } else {
    listItem3.classList.remove("red");
  }
  if (counter > 200 && counter <= 250) {
    listItem4.classList.add("red");
  } else {
    listItem4.classList.remove("red");
  }

  if (counter > 250 && counter <= 300) {
    listItem5.classList.add("red");
  } else {
    listItem5.classList.remove("red");
  }
  if (counter > 300 && counter <= 350) {
    listItem6.classList.add("red");
  } else {
    listItem6.classList.remove("red");
  }
  if (counter >= 399) {
    counter = 0; // Set the initial target value
  }
}
