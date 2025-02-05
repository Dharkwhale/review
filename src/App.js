import React from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero'

function App() {
  return (
    <div >
      <Navbar />
      <div className='flex justify-between'>
      <Sidebar />
      <Hero />
      </div>
    
    </div>
  );
}

export default App;
