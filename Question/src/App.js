import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Components/Main';

function App() {
    return (
        <>
          <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/main" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
        </>
    );
}

export default App;