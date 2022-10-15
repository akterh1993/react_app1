
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
 import Home from "./pages/home";
 import Blogs from "./pages/blogs";
 import Contacts from "./pages/contact";
 import Error from "./pages/error";
//  components
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>

    <Navbar />

      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="/blogs" element={<Blogs />}/>
        <Route path ="/contact" element={<Contacts />}/>
        <Route path ="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
