import './App.css'
import Navbar from './component/Navbar/Navbar';
import Vector from '../src/assets/Vector.svg';
import Vector2 from '../src/assets/Vector2.svg';


function App() {
 
  return (
    <div className='container'>
      <div><Navbar/></div>
        <img src={Vector} alt="" className="img1"/>
        <img src={Vector2} alt="" className="img2" />
        <img src={Vector} alt="" className="img3"/>
        <img src={Vector2} alt="" className="img4"/>
      <div className ="main-content">
        <div className ="flex flex-col items-center gap-4 w-[1008px] h-[297px]">
          <a className="text-[40px] font-bold text-black">Social Tasks</a>
          <a className="text-center text-[14px] text-[#6B6B6B]">Complete the Social Tasks to earn extra $Heart token</a>
        </div>
        <div>
        </div>
      </div>
    </div>
    
  )
}

export default App
