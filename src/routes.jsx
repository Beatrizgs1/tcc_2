import { BrowserRouter as Router, Navigate, Route, Routes as ReactRoutes } from "react-router-dom";
import Home from './pages/Home'
import Produto from './pages/Nossoproduto'

export const Routes = () => {
    return (
        <Router>
            <ReactRoutes>
                <Route path="/" element={<Home/>}/>
                <Route path="/produto" element={<Produto/>}/>
            </ReactRoutes>
        </Router>
    )
}