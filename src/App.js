import React from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RightSection from './components/RightSection';



function App() {
  return (
    <div>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <RightSection/>
      </div>
      
    </div>
  );
}

export default App;
