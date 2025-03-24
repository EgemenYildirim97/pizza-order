
import './App.css'
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './pages/Home'
import OrderPizza from './pages/OrderPizza'
import Success from './pages/Success'

function App() {
  

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" /> 
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/order-pizza">
          <OrderPizza />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </>
  )
}

export default App
