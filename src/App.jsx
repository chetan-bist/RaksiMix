import {ScrollTrigger, SplitText} from 'gsap/all';
import gsap from 'gsap';
import Navbar from './component/Navbar';
import Hero from './component/hero';
import Cocktails from './component/Cocktails'

gsap.registerPlugin(ScrollTrigger,SplitText);

function App() {
  

  return (
    <>
      <main>
          <Navbar/>
          <Hero/>
          <Cocktails/>
      </main>
    </>
  )
}

export default App
