import './App.css';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import landing from './Landing/landing';
import Register from './Customer/pages/Customer_Register/customer_register';
import login from './Customer/pages/Customer_Login/customer_login'
import home from './Customer/pages/Home/home'
import About from './Customer/pages/About/about';
import cookDetails from './Customer/pages/Home/cookDetails';


function App() {
  return (
    <Router>
    <div className="App">
        <Route exact path="/" component={landing}></Route>
        <Route exact path="/customers" component={Register}></Route>
        <Route exact path="/customers/login" component={login}></Route>
        <Route exact path="/cooks" component={home}></Route>
        <Route exact path="/customers/me" component={About}></Route>
        <Route path="/menu" component={cookDetails}></Route>
    </div>
    </Router>
  );
}

export default App;
