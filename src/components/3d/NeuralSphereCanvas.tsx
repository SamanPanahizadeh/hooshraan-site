import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface NeuralSphereCanvasProps {
  className?: string;
}

export const NeuralSphereCanvas: React.FC<NeuralSphereCanvasProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Particle Parameters
    const particleCount = 2800;
    const basePositions = new Float32Array(particleCount * 3);
    const currentPositions = new Float32Array(particleCount * 3);
    const expandedPositions = new Float32Array(particleCount * 3);
    const horizonPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorCyan = new THREE.Color(0x00f5ff);
    const colorPurple = new THREE.Color(0xa855f7);
    const colorBlue = new THREE.Color(0x3b82f6);
    const colorGold = new THREE.Color(0xfcd34d);

    // Fibonacci Sphere Distribution
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
    const sphereRadius = 2.4;

    for (let i = 0; i < particleCount; i++) {
      const y = 1 - (i / (particleCount - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      // Base Sphere (State 1 - Hero)
      const jitter = (Math.random() - 0.5) * 0.2;
      const r = sphereRadius + jitter;
      basePositions[i * 3] = x * r;
      basePositions[i * 3 + 1] = y * r;
      basePositions[i * 3 + 2] = z * r;

      // Expanded Sphere (State 2 - Key Metrics)
      const expandFactor = 2.2 + Math.random() * 1.8;
      expandedPositions[i * 3] = x * r * expandFactor;
      expandedPositions[i * 3 + 1] = y * r * (expandFactor * 0.85);
      expandedPositions[i * 3 + 2] = z * r * expandFactor;

      // Horizon Wave Grid (State 3 - Courses)
      const gridX = (Math.random() - 0.5) * 22;
      const gridZ = (Math.random() - 0.5) * 16;
      const gridY = -2.8 + Math.sin(gridX * 0.4) * 0.5 + Math.cos(gridZ * 0.4) * 0.4;
      horizonPositions[i * 3] = gridX;
      horizonPositions[i * 3 + 1] = gridY;
      horizonPositions[i * 3 + 2] = gridZ;

      // Current positions initially = base
      currentPositions[i * 3] = basePositions[i * 3];
      currentPositions[i * 3 + 1] = basePositions[i * 3 + 1];
      currentPositions[i * 3 + 2] = basePositions[i * 3 + 2];

      // Colors mix: Cyan, Purple, Blue, Gold highlights
      let chosenColor = colorCyan;
      const rand = Math.random();
      if (rand < 0.45) {
        chosenColor = colorCyan;
      } else if (rand < 0.8) {
        chosenColor = colorPurple;
      } else if (rand < 0.93) {
        chosenColor = colorBlue;
      } else {
        chosenColor = colorGold;
      }

      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;

      sizes[i] = Math.random() * 2.5 + 1.2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Create a circular glowing particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.25, 'rgba(0, 245, 255, 0.85)');
      gradient.addColorStop(0.6, 'rgba(168, 85, 247, 0.35)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Subtle glowing core mesh
    const coreGeometry = new THREE.IcosahedronGeometry(1.6, 3);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x094d92,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);

    // Glowing orbital ring
    const ringGeometry = new THREE.TorusGeometry(3.0, 0.015, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI * 0.35;
    ringMesh.rotation.y = Math.PI * 0.15;
    scene.add(ringMesh);

    // Mouse Interaction
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 1.5;
    };
    window.addEventListener('mousemove', handlePointerMove);

    // Scroll Progress
    let scrollProgress = 0;
    let smoothScroll = 0;

    const handleScroll = () => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      scrollProgress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth scroll lerping
      smoothScroll += (scrollProgress - smoothScroll) * 0.06;

      // Smooth mouse lerping
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Group rotation
      particles.rotation.y = elapsedTime * 0.12 + currentMouseX * 0.3;
      particles.rotation.x = Math.sin(elapsedTime * 0.08) * 0.15 - currentMouseY * 0.3;

      coreMesh.rotation.y = -elapsedTime * 0.09;
      coreMesh.rotation.z = elapsedTime * 0.05;

      ringMesh.rotation.z = elapsedTime * 0.08;
      ringMesh.rotation.y = Math.sin(elapsedTime * 0.15) * 0.2;

      // Interpolate particle positions based on smoothScroll
      const positionsAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = positionsAttr.array as Float32Array;

      // Calculate state weights
      let tHero = 1.0;
      let tExpand = 0.0;
      let tHorizon = 0.0;

      if (smoothScroll < 0.35) {
        const localT = smoothScroll / 0.35;
        tHero = 1.0 - localT;
        tExpand = localT;
        tHorizon = 0.0;
      } else if (smoothScroll < 0.75) {
        const localT = (smoothScroll - 0.35) / 0.4;
        tHero = 0.0;
        tExpand = 1.0 - localT;
        tHorizon = localT;
      } else {
        tHero = 0.0;
        tExpand = 0.0;
        tHorizon = 1.0;
      }

      // Breathing pulse for hero
      const pulse = Math.sin(elapsedTime * 1.8) * 0.06 + 1.0;

      // Wave motion for horizon
      const waveSpeed = elapsedTime * 1.2;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const bx = basePositions[i3] * pulse;
        const by = basePositions[i3 + 1] * pulse;
        const bz = basePositions[i3 + 2] * pulse;

        const ex = expandedPositions[i3];
        const ey = expandedPositions[i3 + 1];
        const ez = expandedPositions[i3 + 2];

        // Dynamic wave for horizon
        const hx = horizonPositions[i3];
        const hy = horizonPositions[i3 + 1] + Math.sin(hx * 0.5 + waveSpeed) * 0.25;
        const hz = horizonPositions[i3 + 2];

        posArray[i3] = bx * tHero + ex * tExpand + hx * tHorizon;
        posArray[i3 + 1] = by * tHero + ey * tExpand + hy * tHorizon;
        posArray[i3 + 2] = bz * tHero + ez * tExpand + hz * tHorizon;
      }

      positionsAttr.needsUpdate = true;

      // Adjust Core & Ring opacity across scroll states
      coreMaterial.opacity = Math.max(0.15 * (1 - smoothScroll * 1.8), 0);
      ringMaterial.opacity = Math.max(0.3 * (1 - smoothScroll * 1.5), 0);

      // Camera parallax shift with scroll
      camera.position.y = -smoothScroll * 1.5;
      camera.lookAt(0, -smoothScroll * 0.8, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particleTexture.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
      style={{
        width: '100vw',
        height: '100vh',
      }}
      aria-hidden="true"
    />
  );
};
