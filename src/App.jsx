import './App.css';
import { Canvas } from '@react-three/fiber';
import SolarSystem from './components/SolarSystem';

function App() {
  return (
    <>
      <Canvas>
        <SolarSystem />
      </Canvas>
    </>
  );
}

export default App;
