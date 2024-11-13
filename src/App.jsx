import './App.css'
import Header from "./components/Header"
import { Provider } from 'react-redux'
import AppStore from './uti;s/AppStore'

function App() {

  return (
    <Provider store={AppStore}>
      <div className='top'>
        <Header />
      </div>  
    </Provider>
  )
}

export default App
