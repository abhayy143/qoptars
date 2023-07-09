import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/Footer';

function App(){
  return(
    <div className="App">
      <Navbar/>
      <div className="content">
        <Footer/>
      </div>
    </div>
  )
}

// const App = () => {
//   return <Navbar/>

// };

export default App;
