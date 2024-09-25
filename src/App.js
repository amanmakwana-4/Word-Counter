import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    {/* NavBar is present in the component Folder We only want to write Name here */}
    < Navbar title="My first App"/>
    {/* <About/> */}
       
    <div className="container my-3">
      <TextForm heading="Enter Your Text To Analyze" />
    </div>
    
    </>
  );
}

export default App;
