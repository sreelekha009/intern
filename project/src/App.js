import './App.css';
import About from './components/About';
import Header from './components/Header';
import Infopage from './components/Infopage';
import Signup from './components/Signup';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Icecream from './components/Icecream';
import Milk from './components/Milk';
import Paneer from './components/Paneer';
import Curd from './components/Curd';
import Ghee from './components/Ghee';
import Butter from './components/Butter';
import Home from './components/Home';
import Menu from './components/Menu';



// const slides = [
//   {url: "https://etimg.etb2bimg.com/photo/96331122.cms"},
//   { url: "https://hips.hearstapps.com/hmg-prod/images/different-types-of-dairy-products-royalty-free-image-1568741374.jpg?crop=0.696xw:1.00xh;0.224xw,0&resize=1200:*", title: "boat"  },
//   { url: "https://www.datocms-assets.com/20941/1665663448-what-are-dairy-foods.png?w=1000&fit=max&fm=jpg"},
//   {url: "https://milk.co.uk/wp-content/uploads/2023/01/Potein-in-Dairy.jpg"},
// ];
// const containerStyles = {
//   width: "100%",
//   height: "600px",
// };
function App() {
  return (
    <div className="App">
              <BrowserRouter>
              <Header/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Signup' element={<Signup/>}/>
    <Route exact path='/icecreams' element={<Icecream/>}/>
    <Route exact path='/about' element={<Infopage/>}/>
    <Route exact path='/milk' element={<Milk/>}/>
    <Route exact path='/paneer' element={<Paneer/>}/>
    <Route exact path='/curd' element={<Curd/>}/>
    <Route exact path='/ghee' element={<Ghee/>}/>
    <Route exact path='/butter' element={<Butter/>}/>
    <Route exact path='/Menu' element={<Menu/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/products' element={<About/>}/>
    </Routes>
    </BrowserRouter>
      {/* <div style={containerStyles}>
        <ImageSlider slides={slides} /> */}
    {/* <About/>
    <Infopage/>
    <Testimonial/>
    <Contact/> */}
      </div>
    // </div>
  );
}

export default App;
