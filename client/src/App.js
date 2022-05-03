import logo from './logo.svg';
import './App.css';
import {Route , BrowserRouter , Redirect,Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingCar from './pages/BookingCar'
import UserBookings from './pages/UserBookings'
import AddCar from './pages/AddCar'
import AdminHome from './pages/AdminHome'
import 'antd/dist/antd.css';
import EditCar from './pages/EditCar';



function App() {
  return (
    <div className="App">
         <BrowserRouter>
             
             <Route path='/' exact component={Home} />
             <Route path='/login' exact component={Login} />
             <Route path='/register' exact component={Register} />
             <Route path='/booking/:carId' exact component={BookingCar} />
             <Route path='/userbookings' exact component={UserBookings} />
             <Route path='/addcar' exact component={AddCar} />
             <Route path='/admin' exact component={AdminHome} />
             <Route path='/editcar/:carid' exact component={EditCar} />
             
         </BrowserRouter>

    </div>
  );
}



export default App;


export function ProtectedRoute(props)
{


    if(localStorage.getItem('user'))
    {
      return <Route {...props}/>
    }
    else{
      return <Redirect to='/login'/>
    }
}
