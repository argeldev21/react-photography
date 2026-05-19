
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
// import Error from './pages/Error/Error';

import './App.css'

function App() {
  

  return (
    <>
      <Header/>
      <Routes>

        <Route title="Home" path="/" element={<Home />} />
        {/* <Route path="*" element={<Error />} /> */}
        
      </Routes>
    </>

  )
}

export default App
