import { AuthProvider } from './context/AuthContext'
import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import Login from './pages/Login'
import NavBar from './components/NavBar/NavBar'
import './App.css'

function App () {
  return (
    <AuthProvider>
      <>
        <Switch>
          <Route path='/'>
            <NavBar />
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/:anything*'>
            <div>
              <b>404:</b> Sorry, this page isn't ready yet!
            </div>
            <hr />
          </Route>
        </Switch>
      </>
    </AuthProvider>
  )
}

export default App
