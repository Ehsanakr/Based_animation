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
  fetch("https://cdn.jsdelivr.net/gh/User22807/Based_animation@main/fragmentShader.glsl")
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
  counter = 0; // Reset the counter to 0

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


  
//---ROLLDOWNTEXT---↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

const changingWords = [
    "CRYPTOS",
    "COMMODITIES",
    "AGREEMENTS",
    "FUTURES",
    "TRADING",
    "OPTIONS",
    "DERIVATIVES",
    "PERPETUALS",
    "BONDS",
    "STOCKS",
  ];
  
  // Index to keep track of the current word
  let currentIndex = 0;
  
  // Function to update the changing word with an animation
  function updateChangingWord() {
    const changingWordElement = document.getElementById("changingWord");
    const textContainerElement = document.getElementById("rollingTextContainer");
  
    textContainerElement.style.width = `${changingWordElement.offsetWidth}px`; // Set the width to the current word's width
  
    changingWordElement.classList.remove("fade-in");
    changingWordElement.classList.add("fade-out");
  
    setTimeout(() => {
      changingWordElement.textContent = changingWords[currentIndex];
      changingWordElement.classList.remove("fade-out");
      changingWordElement.classList.add("fade-in");
  
      // Update the container width after changing the word
      textContainerElement.style.width = `${changingWordElement.offsetWidth}px`;
  
      currentIndex = (currentIndex + 1) % changingWords.length;
    }, 500); // Adjust the duration as needed
  }
  
  // Initial call to start the animation
  updateChangingWord();
  
  // Set up a timer to change the word at intervals
  setInterval(updateChangingWord, 3000); // Change the word every 3 seconds, adjust as needed
  //---ROLLDOWNTEXT---↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
  