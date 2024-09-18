import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

const ThreeCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Create a rainbow gradient background
    const backgroundTexture = new THREE.TextureLoader().load(
      'data:image/svg+xml;base64,' +
        btoa(`
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color: red; stop-opacity: 1" />
              <stop offset="16%" style="stop-color: orange; stop-opacity: 1" />
              <stop offset="33%" style="stop-color: yellow; stop-opacity: 1" />
              <stop offset="50%" style="stop-color: green; stop-opacity: 1" />
              <stop offset="66%" style="stop-color: blue; stop-opacity: 1" />
              <stop offset="83%" style="stop-color: indigo; stop-opacity: 1" />
              <stop offset="100%" style="stop-color: violet; stop-opacity: 1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#rainbow)" />
        </svg>`)
    );
    scene.background = backgroundTexture;

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040); // Ambient light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Load font and create text geometry
    const loader = new FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
      const textGeometry = new TextGeometry('NASIR HANIF', {
        font: font,
        size: 2,
        height: 0.5,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.2,
        bevelOffset: 0,
        bevelSegments: 4
      });

      const textMaterial = new THREE.MeshStandardMaterial({ color: 0xff4500 });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textGeometry.computeBoundingBox();
      textGeometry.center();
      textMesh.position.z = -5;

      scene.add(textMesh);
    });

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;

    camera.position.z = 10;

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // Handle mouse movement
    const onMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      camera.position.x = x * 5;
      camera.position.y = y * 5;
      camera.lookAt(scene.position);
    };
    document.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onMouseMove);
      canvasRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={canvasRef} style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }} />;
};

export default ThreeCanvas;
