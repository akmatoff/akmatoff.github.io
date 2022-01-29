import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import cactus from "./assets/3d-models/cactus with glasses.gltf";

const Scene = (canvas) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Scene
  const scene = new THREE.Scene();
  // scene.background = new THREE.Color(0xff1a181a);
  scene.fog = new THREE.FogExp2("#1a181a", 0.27);

  var cactusModel;
  let mouseX = 0,
    mouseY = 0;

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    canvas.width / canvas.height,
    0.1,
    10000
  );

  camera.position.set(0.2, 2, 4);

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas: canvas,
  });
  renderer.toneMapping = THREE.ReinhardToneMapping;
  renderer.toneMappingExposure = 2.5;
  renderer.shadowMap.enabled = true;
  renderer.setSize(canvas.width, canvas.height);

  // Lights
  const spotlight = new THREE.SpotLight(0xccb499, 40);
  spotlight.castShadow = true;
  spotlight.shadow.bias = -0.0001;
  spotlight.shadow.mapSize.set(1024 * 4, 1024 * 4);
  scene.add(spotlight);

  const dirLight = new THREE.DirectionalLight(0x333b4a, 70);
  dirLight.castShadow = true;
  dirLight.position.set(-5, 5, 0);
  scene.add(dirLight);

  // Loader
  const loader = new GLTFLoader();
  loader.load(cactus, (gltf) => {
    let obj = gltf.scene;
    obj.traverse((n) => {
      if (n.isMesh) {
        n.castShadow = true;
        n.receiveShadow = true;

        if (n.material.map) n.material.map.anisotropy = 16;
      }
    });

    obj.scale.set(1.3, 1.3, 1.3);

    cactusModel = obj;
    scene.add(obj);

    render();
  });

  // const planeGeo = new THREE.PlaneGeometry(1024, 1024);
  // const planeMat = new THREE.MeshPhongMaterial({
  //   color: "#1a181a",
  //   shininess: 1.0,
  //   reflectivity: 1,
  // });
  // const plane = new THREE.Mesh(planeGeo, planeMat);
  // plane.position.set(0, 0, 0);
  // plane.rotation.x = -Math.PI / 2;
  // plane.receiveShadow = true;

  // scene.add(plane);

  const render = () => {
    requestAnimationFrame(render);

    if (camera.position.y <= 1) camera.position.y = 1;

    spotlight.position.set(
      camera.position.x + 5,
      camera.position.y + 15,
      camera.position.z
    );

    camera.position.x += (mouseX - camera.position.x) * 0.05;
    // camera.position.y += (-mouseY - camera.position.y) * 0.05;

    camera.lookAt(
      cactusModel.position.x,
      cactusModel.position.y + 2,
      cactusModel.position.z - 2
    );

    cactusModel.rotation.y += Math.sin(Date.now() * 0.001) * 0.005;
    cactusModel.rotation.z += Math.sin(Date.now() * 0.002) * 0.003;

    renderer.render(scene, camera);
  };

  const onWindowResize = () => {
    camera.aspect = canvas.width / canvas.height;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.width, canvas.height);
  };

  const onMouseMove = (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.003;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.003;
  };

  window.addEventListener("resize", onWindowResize);
  window.addEventListener("mousemove", onMouseMove);
};

export default Scene;
