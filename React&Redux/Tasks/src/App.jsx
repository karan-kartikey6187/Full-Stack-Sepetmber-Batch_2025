// Import Required React Tags and Hooks
import { Fragment, useState } from 'react'

// Import CSS and BootStrap
import './App.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

// Compontents
import StaticProfileCard from './components/StaticProfileCard'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import DynamicProfileCard from './components/DynamicProfileCard'
import AvatarImg1 from '../src/assets/images/user.png'
import AvatarImg2 from '../src/assets/images/user-2.png'
import AvatarImg3 from '../src/assets/images/user-3.png'
import { UseState } from './components/UseState'
import { UseStateCounter } from './components/UseStateCounter'
import { UseReducerCounter } from './components/UseReducerCounter'
import TodoListProject from './components/TodoListProject'
import { RootLayout } from './layouts/RootLayout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import SignIn from './pages/auth/SignIn'
import Signup from './pages/auth/SignUp'

// Import Required Routes
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { router } from './routes/DataModeRoutes'
import { WishlistProvider } from './context/providers/WishlistProvider'

function App() {
  // return (
  // <div className='box d-grid container'>
  {/* Assignment 1 */ }
  {/* <Header mainHeading="Student Profile Card" subHeading="Static React Components Assignment"/>
       <StaticProfileCard/>
       <Footer footerText="Created for React practice"/> */}


  {/* Assignment 2 */ }
  {/* <Header
        mainHeading="Student Profile Cards"
        subHeading="Dynamic React Component Assignment"
      />
      <div className='row gy-4 justify-content-center align-items-center'>
        <DynamicProfileCard
          avatarImg={AvatarImg1}
          studentName="John Doe"
          studentRole="Frontend Developement Student"
          studentMsg="I enjoy building clean and responsive user interfaces using React."
        />
        <DynamicProfileCard
          avatarImg={AvatarImg2}
          studentName="Jennifer Martin"
          studentRole="Backend Development Student"
          studentMsg="I enjoy building fast api using Python and fastapi."
        />
        <DynamicProfileCard
          avatarImg={AvatarImg3}
          studentName="Thomas Smith"
          studentRole="Full Stack Development Student"
          studentMsg="I enjoy building clean and responsive user interfaces and api using React."
        />
        <DynamicProfileCard />
      </div>
      <Footer
        footerText="Created for React practice"
      /> */}


  {/* Assignment 3 Demo*/ }
  {/* <UseState/> */ }

  {/* Assignment 3*/ }
  {/* <UseStateCounter/>
      <UseReducerCounter/> */}


  {/* Assignment 4*/ }
  {/* <TodoListProject/> */ }


  {/*Testing React Router ( Declarative Mode ) */ }
  {/* <BrowserRouter>
        <Routes> */}
  {/* Root Layout Routes*/ }
  {/* <Route element={<RootLayout/>}>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
          </Route> */}

  {/* Auth Layout Routes*/ }
  {/* <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter> */}
  {/* </div> */ }
  // )

  return (
    <WishlistProvider>
      <RouterProvider router={router} />
    </WishlistProvider>
  )

}

export default App
