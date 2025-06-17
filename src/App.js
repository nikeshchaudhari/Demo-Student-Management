import logo from './logo.svg';
import './App.css';

import StudentRegister from './component/StudentRegister';
import Login from './component/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  const myroute = createBrowserRouter([
    {path:"/",element:<Login/>},
    {path:"/studentregister",element:<StudentRegister/>}
  ]

  );
  return (
    <div>

<RouterProvider router={myroute}/>



    
    </div>
  );
}

export default App;
