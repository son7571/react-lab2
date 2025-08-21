import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Design from "./pages/Design";
import Info from "./pages/Info";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/info/:id/good/:goodid" element={<Info />} />
                <Route path="/design" element={<Design user ={{id:1, username:"cos"}}/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
