import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/banner";
import Image1 from "./images/1.jpg";
import Image2 from "./images/2.jpg";
import Image3 from "./images/3.jpg";
import Image4 from "./images/4.jpg";
import Image5 from "./images/5.jpg";

import GridItems from './components/GridItems';
import Footer from './components/footer';
function App() {
  return (
    <>  
        <NavigationBar></NavigationBar>
        <Banner></Banner>
        
        <div className="bg-dark p-5">
            <div className="container">
              <h1 className="text-warning">Top 5 Animes of the Week</h1>
            </div>
            <div className="row g-5 justify-content-center">
               <GridItems name="Demon Slayer" imageFile={Image1} desc="Lorem Ipsum"></GridItems>
               <GridItems name="HaiKyu" imageFile={Image2} desc="Lorem Ipsum2"></GridItems>
               <GridItems name="Eyeshield 21" imageFile={Image3} desc="Lorem Ipsum3"></GridItems>
               <GridItems name="Jujutsu Kaisen" imageFile={Image4} desc="Lorem Ipsum4"></GridItems>
               <GridItems name="Immoratal" imageFile={Image5} desc="Lorem Ipsum5"></GridItems>
            </div>
        </div>
      <Footer></Footer>
    </>
   
  );
}

export default App;
