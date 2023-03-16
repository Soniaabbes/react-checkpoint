
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navette from './components/Navette';
import CardList from './components/CardList';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Home from './components/Home';
import Carddd from './components/Carddd';
import Trailer from './components/Trailer';





function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h3>movie app</h3>
      <Navette/> 

      <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path="/Liste" element={ <CardList/>}/>
        <Route path ="/card/:title" element = {<Carddd/>}/>
        <Route path = "/trailer/:id"element ={<Trailer />}/>
        </Routes>
      
       
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
