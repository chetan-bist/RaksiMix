import {ScrollTrigger, SplitText} from 'gsap/all';
import gsap from 'gsap';
import Navbar from './component/Navbar';

gsap.registerPlugin(ScrollTrigger,SplitText);

function App() {
  

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
