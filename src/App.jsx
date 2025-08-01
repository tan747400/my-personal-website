import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';


import './App.css'; // ต้องแน่ใจว่าไฟล์นี้ import Tailwind แล้ว

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
<section className="bg-white min-h-screen flex items-center justify-center">
  <h1 className="text-red-500 text-5xl font-bold">My First React App on Vite</h1>
</section>
    </>
  );
}

export default App;

