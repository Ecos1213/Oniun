import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Store from './Pages/Store';
import SoldProducts from './Pages/SoldProducts';
import AccountSettings from './Pages/AccountSettings';
import ResetPassword from './Pages/ResetPassword';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={ <Home/> } />
          <Route exact path="/reset-password" element={ <ResetPassword/> } />
          <Route exact path="/create-account" element={ <ResetPassword/> } />
          <Route exact path="/store" element={ <Store/> } />
          <Route exact path="/sold-products" element={ <AccountSettings/> } />
          <Route exact path="/account-settings" element={ <SoldProducts/> } />
      </Routes>
    </BrowserRouter>       
  );
}

export default App;
