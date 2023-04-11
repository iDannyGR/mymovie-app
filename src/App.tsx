import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import './assets/index.css';
import  Login   from '@/pages/Login';
import  Home  from './pages/Home';
import  { Error404 }  from '@/components/Error404';
import { authStore } from '@/store/authStore';
import { IsAuth } from './components/IsAuth';


function App() {

const itAuth = authStore((state) => state.itAuth);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!itAuth ? <Login /> : <Navigate to={'home'}/> } />
          <Route
            path="home"
            element={
              <IsAuth isAllowed={itAuth}>
                <Home />
              </IsAuth>
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
