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
import Contact from './components/Contact'

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
           <Route path='/' element= {<MainLayout/>}>
                <Route index element= {<HomePage/>}/>
                <Route path='/uber' element= {<UberUnsPage/>}/>
                <Route path='/kontakt' element= {<Contact/>}/>
           </Route>
        )
    )

  return (
    <RouterProvider router = {router}/>
)
}

export default App
