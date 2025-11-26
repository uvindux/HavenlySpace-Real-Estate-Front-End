
import Navbar from './Components/Navbar/Navbar'
import './index.scss'
import './layout.scss'
import Homepage from './routes/Homepage/Homepage.jsx'


function App() {

  return (
    <>
    <div className='layout'>
    <div className="Navbar">
      <Navbar/>
    </div>
    <div className="Content">
       <Homepage/>
    </div>
     
    </div>
    
  
   


    </>
  )
}

export default App
