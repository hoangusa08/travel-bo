import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { routeConfig, RouteWithSubRoutes } from './routers/Config';
import Login from './pages/login/Login';
import Toast from "./components/Toast"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          {routeConfig.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
      <Toast />
    </div>
  );
}

export default App;
