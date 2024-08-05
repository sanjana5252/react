import './App.css';
/*import About from './components/About';*/
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
<Navbar About="About"/>
<div className='container'>
<TextForm  heading="Enter The Text To Analyze"/>
<div className='container'>
</div>
{/*<About></About>*/}
</div>
  </>
  );
  }
export default App;

