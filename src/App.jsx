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
import ItemPage , {itemLoader} from './pages/ItemPage'
import CommentsPage , {CommentsLoader} from './pages/CommentsPage'

const App = () => {
     const commentadding = async (newcomment) => {
      // console.log(newcomment)
      const res = await fetch('/api/comments-add' , {
          method: 'POST',
          headers: {'content-type' : 'application/json'},
          body: JSON.stringify(newcomment),
      });
      return
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
           <Route path='/' element= {<MainLayout/>}>
                <Route index element= {<HomePage/>}/>
                <Route path='/uber' element= {<UberUnsPage/>}/>
                <Route path='/kontakt' element= {<ContactPage/>}/>
                <Route path='/Produkt' element= {<ProductPage/>}/>
                <Route path='/Produkt/:id' element= {<ItemPage/>} loader={itemLoader}/>
                <Route path='/Kommentar' element= {<CommentsPage addcomment={commentadding}/> }  loader={CommentsLoader} />
           </Route>
        )
    )

  return (
    <RouterProvider router = {router}/>
)
}

export default App
