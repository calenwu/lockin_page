import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useThree, createPortal } from '@react-three/fiber';
import * as THREE from 'three';

const fragmentShader = `
  uniform vec2 iResolution;
  
  float Circle(vec2 uv, vec2 center, float radius, float thickness, float seed) {
    float dis = distance(center, uv);
    vec2 centerToPixel = uv - center;
    float angle = atan(centerToPixel.y, centerToPixel.x);
    
    float s1 = sin(angle * 5.0 + 512.0 + seed) * 0.006;
    float s2 = sin(angle * 2.0 + 21.0 + seed) * 0.008;
    float noise = s1 + s2;
    return 1.0 - smoothstep(thickness, thickness + 0.013, abs(dis - radius + noise));
  }
  void main() {
    vec2 uv = gl_FragCoord.xy/iResolution.xy;
    
    // Center the coordinates
    uv = uv * 2.0 - 1.0;
    
    // Adjust for aspect ratio to keep the circle centered
    float aspect = iResolution.x / iResolution.y;
    uv.x *= aspect;
    
    // More subtle offset centers for each circle
    vec2 center1 = vec2(0.01, -0.01);  // red offset
    vec2 center2 = vec2(-0.01, 0.005);  // green offset
    vec2 center3 = vec2(0.0, -0.008); // blue offset
    
    // More similar radii
    float radius1 = 0.80;
    float radius2 = 0.79;
    float radius3 = 0.805;
    
    // Render the circles with extremely thick strokes
    float r = Circle(uv, center1, radius1, 0.12, 42.0);
    float g = Circle(uv, center2, radius2, 0.10, 18.0);
    float b = Circle(uv, center3, radius3, 0.11, 71.0);
    
    vec3 col = vec3(r, g, b);
    float alpha = max(max(r, g), b);
    
    gl_FragColor = vec4(col, alpha);
}
`;

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

function ShaderMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree(); // Get the canvas size from Three.js

  const uniformsRef = useRef({
    iResolution: {
      value: new THREE.Vector2(1, 1), // Initialize with dummy values
    },
  });

  // Update resolution when size changes
  useEffect(() => {
    uniformsRef.current.iResolution.value.set(size.width, size.height);
  }, [size]);

  const shaderMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: uniformsRef.current,
        fragmentShader,
        vertexShader,
        transparent: true,
      }),
    []
  );

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <primitive object={shaderMaterial} attach='material' />
    </mesh>
  );
}

export default function ShaderCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className='relative w-full h-full'>
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 1] }}
        className='w-full h-full'
        style={{ display: 'block' }}
      >
        <ShaderMesh />
      </Canvas>
    </div>
  );
}
