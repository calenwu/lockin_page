import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const fragmentShader = `
  uniform float iTime;
  uniform vec2 iResolution;
  
  float Circle(vec2 uv, vec2 center, float radius, float thickness, float seed) {
    float dis = distance(center, uv);
    vec2 centerToPixel = uv - center;
    float angle = atan(centerToPixel.y, centerToPixel.x);
    
    float s1 = sin(angle * 5.0 - iTime + 512.0 + seed) * 0.006;
    float s2 = sin(angle * 2.0 + iTime * 1.8 + 21.0 + seed) * 0.008;
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
    
    vec2 center = vec2(0.0);
    float radius = 0.8;
    
    float r = Circle(uv, center, radius, 0.0065, 42.0);
    float g = Circle(uv, center, radius, 0.0050, 18.0);
    float b = Circle(uv, center, radius, 0.0065, 71.0);
    
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
    iTime: { value: 0 },
    iResolution: {
      value: new THREE.Vector2(1, 1), // Initialize with dummy values
    },
  });

  // Update resolution when size changes
  useEffect(() => {
    uniformsRef.current.iResolution.value.set(size.width, size.height);
  }, [size]);

  useFrame((state) => {
    if (uniformsRef.current) {
      uniformsRef.current.iTime.value = state.clock.elapsedTime;
      // Update resolution each frame to ensure it's always correct
      uniformsRef.current.iResolution.value.set(size.width, size.height);
    }
  });

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
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      className='w-full h-full'
      style={{ display: 'block' }}
    >
      <ShaderMesh />
    </Canvas>
  );
}
