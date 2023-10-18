import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import Earth from './Earth';

const SolarSystem = () => {
  const SolarRef = useRef();

  const [sunTexture] = useTexture(['/assets/sun.jpeg']);

  useFrame((state, delta) => {
    SolarRef.current.rotation.z += 0.009;
  });

  return (
    <>
      <directionalLight position={[1, 1, 8]} />

      <mesh ref={SolarRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={sunTexture} />

        <Earth />
      </mesh>
    </>
  );
};

export default SolarSystem;
