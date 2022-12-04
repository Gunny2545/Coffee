import './App.css';
import Head from './Head';
import Footer from './Footer';
import Welcome from './Welcome';
import NameCard from './NameCard';
// picture
import Cappuccino from './cpcn.jpg';
import Latte from './Latte.jpg';
import Mocha from './Mocha.png';
import HBcff from './HBcff.jpg';
import Eps from './Eps.png';

function App() {
  let customer = [
    { picture:Cappuccino ,name: "Cappuccino"        ,price: " " ,type:"70" ,type2:"50"  ,type3:"50"},
    { picture:Latte      ,name: "Latte"             ,price: " " ,type:"30" ,type2:"55"  ,type3:"50"},
    { picture:Mocha      ,name: "Mocha"             ,price: " " ,type:"50" ,type2:"40"  ,type3:"50"},
    { picture:HBcff      ,name: "Honey Black Coffee",price: " " ,type:"55" ,type2:"60"  ,type3:"60"},
    { picture:Eps        ,name: "Espresso"          ,price: " " ,type:"40" ,type2:"45"  ,type3:"50"},
  ]
  return (
    <>
    <Head/>
    {/* <Welcome name="Maria"/>
    <p className="App">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sequi facilis. Eum tempora similique incidunt! Debitis maiores sed voluptatum fugit vero, eaque harum nobis porro fugiat aspernatur quo quaerat amet.

    </p> */}
    {
      customer.map( s =>
        <NameCard name={s.name} price={s.price} type={s.type} type2={s.type2} type3={s.type3} picture={s.picture}/>
        )
    }
    <Footer/>
    
    </>
   
  );
}

export default App;

