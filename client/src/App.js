import {
  createBrowserRouter, 
  RouterProvider,
  Outlet,
} from 'react-router-dom'; 
import PopularGames from './scenes/PopularGames.js'; 
import Welcome from './scenes/Welcome.js'; 



const Layout = () => {
  return (
    <>
    <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
   path: '/', 
   element: <Layout />, 

   children: [
    {
      path: '/',
      element: <PopularGames />,
    },
    {
      path: '/welcome',
      element: <Welcome />,
    },
   ]
  }
])

function App() {
  return (
   <>
   <RouterProvider router={router}></RouterProvider>
   </>
  );
}

export default App;
