import { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import Moon from './Moon';
const Earth = () => {
  const earthRef = useRef();
  const [earthTexture] = useTexture(['/assets/earth.jpeg']);

  useFrame(() => {
    earthRef.current.rotation.z += 0.006;
  });

  return (
    <group>
      <mesh ref={earthRef} position-y={2.5}>
        <sphereGeometry args={[0.3, 32, 32]} />

        <meshStandardMaterial map={earthTexture} />
        <Moon />
      </mesh>
    </group>
  );
};

export default Earth;
