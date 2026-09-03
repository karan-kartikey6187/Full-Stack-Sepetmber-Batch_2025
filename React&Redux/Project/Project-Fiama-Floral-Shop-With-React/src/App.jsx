
// Import CSS and BootStrap
import './App.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'


// Import Required Routes
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/DataModeRoutes'
import { Provider } from 'react-redux'
import { store } from 'src/store/Store'
import { ToastContainer } from 'react-toastify'

function App() {

   return (
      <Provider store={store}>
         <RouterProvider router={router} />
         <ToastContainer />
      </Provider>
   )
}

export default App
