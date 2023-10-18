import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Moon = () => {
  const moonRef = useRef();

  const [moonTexture] = useTexture(['/assets/moon.jpeg']);

  useFrame(() => {
    moonRef.current.rotation.z += 0.003;
  });

  return (
    <mesh castShadow ref={moonRef} position={[0, 1, 0]}>
      {/* Radius , X-axis , Y-axis */}
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshPhongMaterial map={moonTexture} />
    </mesh>
  );
};

export default Moon;
