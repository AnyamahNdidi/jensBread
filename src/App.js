import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AllProduct from './Component/AllProduct/AllProduct';
import { theme } from "./Component/Theme/GlobalTheme"
import {ThemeProvider} from "@mui/material/styles"
import HeaderCom from './Component/Header/HeaderCom';
import CartPage from './Component/Cart/CartPage';
import SignIn from './Component/Auth/SignIn';
import Login from "./Component/Auth/Login"
import Address from './Component/Auth/Address';
import AdminDash from './Component/Admin/AdminDash';

function App() {
  return (
    <div >
       <ThemeProvider theme={theme}>
        <Router>
          <HeaderCom/>
          <Routes>
            
            <Route path='/' element={<AllProduct/> }/>
            <Route path='/cart' element={<CartPage />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin' element={<AdminDash/> } />

            <Route path='/details' element={<Address />} />
            
            
        </Routes>
        </Router>
      </ThemeProvider>
    
    </div>
  );
}

export default App;
