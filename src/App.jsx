import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'

import './App.css'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import UberUnsPage from './pages/UberUnsPage'
import ContactPage from './components/Contact'
import ProductPage from './pages/ProductPage'
import ItemPage from './pages/ItemPage'

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
           <Route path='/' element= {<MainLayout/>}>
                <Route index element= {<HomePage/>}/>
                <Route path='/uber' element= {<UberUnsPage/>}/>
                <Route path='/kontakt' element= {<ContactPage/>}/>
                <Route path='/Produkt' element= {<ProductPage/>}/>
                <Route path='/Produkt/:id' element= {<ItemPage/>} />
           </Route>
        )
    )

  return (
    <RouterProvider router = {router}/>
)
}

export default App
