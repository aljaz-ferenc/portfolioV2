import React, { useEffect, useRef } from "react";
import "../main.scss";
import * as CANNON from "cannon-es";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const positions = [
  [
    //pyramid
    { x: -1.5, y: 0.5, z: 0 },
    { x: 0, y: 0.5, z: 0 },
    { x: 1.5, y: 0.5, z: 0 },
    { x: -0.75, y: 1.5, z: 0 },
    { x: 0.75, y: 1.5, z: 0 },
    { x: 0, y: 2.5, z: 0 },
    { x: 0, y: 3.5, z: 0 },
  ],
  [
    //towers
    { x:-1, y: 0.5, z: 0 },
    { x:-1, y: 1.5, z: 0 },
    { x:-1, y: 2.5, z: 0 },
    { x:-1, y: 3.5, z: 0 },
    { x:1, y: 0.5, z: 0 },
    { x:1, y: 1.5, z: 0 },
    { x:1, y: 2.5, z: 0 },
  ],
  [
    //low
    { x: -1.5, y: 0.5, z: 0 },
    { x: 0, y: 0.5, z: 0 },
    { x: 1.5, y: 0.5, z: 0 },
    { x: 3, y: 0.5, z: 0 },
    { x:  -0.75, y: 1.5, z: 0 },
    { x: 0.75, y: 1.5, z: 0 },
    { x: 2.25, y: 1.5, z: 0 },
  ],
];

export default function Stack() {
  const canvasRef = useRef();

  useEffect(() => {
    /*********************************************
     * THREE.JS BASE
     **********************************************/

    //sizes
    const sizes = {
      width: innerWidth,
      height: innerHeight,
    };

    //canvas
    const canvas = canvasRef.current;
    canvas.width = sizes.width;
    canvas.height = sizes.height;

    //scene
    const scene = new THREE.Scene();

    //camera
    const camera = new THREE.PerspectiveCamera(
      50,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.set(-3, 5, 10);

    //renderer
    const renderer = new THREE.WebGL1Renderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.shadowMap.enabled = true;
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    //lights

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2, 100, 3);
    pointLight.position.set(5, 10, 8);
    scene.add(pointLight);

    //update on resize
    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      //Update canvas
      canvas.width = sizes.width;
      canvas.height = sizes.height;
    });

    //texture loader
    const textureLoader = new THREE.TextureLoader();
    const textures = [
      "css3",
      "html5",
      "sass",
      "github",
      "photoshop",
      "javascript",
      "react",
    ];

    /*********************************************
     * CANNON.JS PHYSICS WORLD
     **********************************************/
    const world = new CANNON.World();

    //optimize collision detection
    world.broadphase = new CANNON.SAPBroadphase(world);
    // world.allowSleep = true;
    world.gravity.set(0, -9.82, 0);

    //materials
    const defaultMaterial = new CANNON.Material("default");

    const defaultContactMaterial = new CANNON.ContactMaterial(
      defaultMaterial,
      defaultMaterial,
      {
        friction: 0.1,
        restitution: 0.7,
      }
    );
    world.defaultContactMaterial = defaultContactMaterial;

    /*********************************************
     * OBJECTS
     **********************************************/

    //ground - cannon
    const groundShape = new CANNON.Plane();
    const groundBody = new CANNON.Body({
      mass: 0,
      material: defaultMaterial,
    });
    groundBody.quaternion.setFromAxisAngle(
      new CANNON.Vec3(-1, 0, 0),
      Math.PI * 0.5
    );
    groundBody.addShape(groundShape);
    world.addBody(groundBody);

    //ground - three
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshStandardMaterial({
        color: "#ffffff",
        metalness: 0.5,
        roughness: 0.3,
      })
    );
    ground.receiveShadow = true;
    ground.rotation.x = -Math.PI * 0.5;
    // scene.add(ground);

    const objects = [];
    const spheres = [];

    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

    //creates and links three and cannon box
    const randomNum = Math.floor(Math.random() * 3)
    function createBox(width, height, depth, position, texture) {
      //three mesh
      const mesh = new THREE.Mesh(
        boxGeometry,
        new THREE.MeshStandardMaterial({
          metalness: 0.5,
          roughness: 0.3,
          map: textureLoader.load(`../icons/${texture}-box.png`),
        })
      );
      mesh.castShadow = true;
      mesh.position.copy(position);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);

      //canon body
      const shape = new CANNON.Box(
        new CANNON.Vec3(width * 0.5, height * 0.5, depth * 0.5)
      );
      const body = new CANNON.Body({
        mass: 1,
        position: new CANNON.Vec3(0, 3, 0),
        shape: shape,
        material: defaultMaterial,
      });
      body.position.copy(position);
      world.addBody(body);
      objects.push({ mesh, body });
    }
    textures.forEach((texture, i) => {
      createBox(1, 1, 1, positions[randomNum][i], texture);
    });

    const sphereGeometry = new THREE.SphereGeometry(1, 20, 20);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      metalness: 0.5,
      roughness: 0.3,
    });

    function createSphere(radius, position) {
      const mesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
      mesh.scale.set(radius, radius, radius);
      mesh.position.copy(position);
      scene.add(mesh);

      const shape = new CANNON.Sphere(radius);
      const body = new CANNON.Body({
        mass: 1,
        position: { x: position.x, y: position.y - 1, z: position.z },
        shape: shape,
        material: defaultMaterial,
      });
      body.applyForce({
        x: raycaster.ray.origin.x * -100,
        y: raycaster.ray.origin.y * -100,
        z: raycaster.ray.origin.z * -100,
      });
      world.addBody(body);
      spheres.push({ mesh, body });
    }

    /*********************************************
     * RAYCASTER
     **********************************************/
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    window.addEventListener("mousemove", (e) => {
      //normalized coords
      mouse.x = (e.clientX / sizes.width) * 2 - 1;
      mouse.y = -(e.clientY / sizes.height) * 2 + 1;
    });

    window.addEventListener("click", (e) => {
      createSphere(0.5, raycaster.ray.origin);
      if (spheres.length > 5) {
        scene.remove(spheres[0].mesh);
        world.removeBody(spheres[0].body);
        spheres.shift();
      }
    });
    /*********************************************
     * ANIMATION
     **********************************************/
    const clock = new THREE.Clock();
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.maxPolarAngle = Math.PI / 2.2;

    let previousElapsedTime = 0;

    function animate() {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - previousElapsedTime;
      previousElapsedTime = elapsedTime;

      controls.update();

      //update physics
      world.step(1 / 60, deltaTime, 3);

      objects.forEach((object) => {
        object.mesh.position.copy(object.body.position);
        object.mesh.quaternion.copy(object.body.quaternion);
      });
      spheres.forEach((sphere) => {
        sphere.mesh.position.copy(sphere.body.position);
        sphere.mesh.quaternion.copy(sphere.body.quaternion);
      });

      //raycaster
      raycaster.setFromCamera(mouse, camera);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();
  });

  return (
    <div className="stack">
      <canvas className="canvas" ref={canvasRef}></canvas>
    </div>
  );
}