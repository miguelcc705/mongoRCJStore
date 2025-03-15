import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Articulos from './components/Articulos';
import Subida from './components/Subida';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            {/* ✅ Navbar con fondo degradado y mejor diseño */}
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'black' }}>
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">🛒 Tienda Online</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold" to="/">🛍️ Artículos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold" to="/subida">➕ Agregar Precio</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Articulos />} />
                    <Route path="/subida" element={<Subida />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Menu from './components/Menu';
// import Articulos from './components/Articulos';
// import Subida from './components/Subida';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//     return (
//         <Router>
//             <Menu />
//             <Routes>
//                 <Route path="/" element={<Articulos />} />
//                 <Route path="/subida" element={<Subida />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;
