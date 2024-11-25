import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Nossoproduto } from './pages/Nossoproduto'
import { Materiais} from './pages/Materiais'
import { Bibliografias } from './pages/Bibliografias'
import { Quemsomos } from './pages/Quemsomos'
import {Jogo} from './pages/Jogo'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/produto",
    element: <Nossoproduto/>
  },
  {
    path: "/materiais",
    element: <Materiais/>
  },
  {
    path: "/bibliografias",
    element: <Bibliografias/>
  },
  {
    path: "/desenvolvedores",
    element: <Quemsomos/>
  },
  {
    path: "/jogos",
    element: <Jogo/>
  },

])


export function App() {
  return (
     <RouterProvider router={router} />
  )
}


