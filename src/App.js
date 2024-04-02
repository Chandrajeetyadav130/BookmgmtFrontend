import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route,Routes } from 'react-router-dom';
import UpdateBook from './Component/UpdateBook';
import Header from './Component/Header';
import DisplayBook from './Component/DisplayBook';
import AddBook from "./Component/AddBook"
import EditBook from './Component/EditBook';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      {/* <Route exact path='/' element={<UpdateBook/>}/> */}
      <Route exact path='/' element={<DisplayBook/>}/>

      <Route exact path='/addBook' element={<AddBook/>}/>
      <Route exact path='/editBook/:id' element={<EditBook/>}/>


        
      </Routes>
    </div>
  );
}

export default App;
