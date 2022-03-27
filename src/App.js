import "./App.scss";
import Navbar from "./compenent/Navbar/Navbar";
import Header from "../src/compenent/Header/Header"
import Main from "./compenent/Main/Main"


const App = ()=>{
  return(
    <div className="App">

      <Navbar/> 
      <Header/>
      <Main/>
    

    </div>
  )
}

export default App