import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Cart, Category, Home } from './Pages'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './App.scss'


const Layout = () => {
  return (
    <div className="app">
      <Navbar />      
        <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  },
])

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
