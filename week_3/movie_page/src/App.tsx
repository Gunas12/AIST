
import './main.scss';
import Footer from './Pages/components/Footer';

import Navbar from './Pages/components/Navbar';
import Slider from './Pages/components/Slider';
import Genre1 from './Pages/Genre1';
import Genre2 from './Pages/Genre2';
import Trial from './Pages/Trial';



function App() {
  
  return (
    <div className="all_section" >
    <Navbar/>
    <Slider/>
    <Genre1/>
    <Genre2/>
    <Trial/>
    <Footer/>

    
    </div>
  );
}

export default App;
