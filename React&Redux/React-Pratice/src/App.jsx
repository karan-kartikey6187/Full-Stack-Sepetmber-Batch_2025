import { Fragment, useState } from 'react'
import './App.css'
import ReactImg from './assets/images/react-in-hand.jpg'
import ReactHookForm from './components/ReactHookForm'
// Default Export
// import SubmitButton from './components/SubmitButton'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/DataModeRoutes'
import { UsernameContext } from './context/Context'


function App() {
  //   return (
  //     <div className='d-flex justify-content-center align-items-center'>
  //       {/* <h1>Hello World!!!</h1> */}
  //       {
  //       /* <Data />
  //       <Image />
  //       <form>
  //         <label htmlFor='name'>Name</label>
  //         <input type="text" id="name"/>
  //       </form>
  //       <MyArr/>*/
  //       // <Add />
  //       <ReactHookForm/>
  //       }
  //     </div>
  //   )
  // }

  // function Data() {
  //   return (
  //     <Fragment>
  //       <p>Id: 1</p>
  //       <p>Name: Karan</p>
  //       <p>Email: karankaritkey@gmail.com</p>
  //       <p>Contact: 8435665567</p>
  //     </Fragment>
  //   )
  // }

  // function Image() {
  //   return (
  //     <Fragment>
  //       <img src="https://img.magnific.com/premium-vector/handsome-boy-with-glasses-semi-flat-vector-character-head-semi-flat-vector-character-head-editable-cartoon-avatar-icon-face-emotion-colorful-spot-illustration-web-graphic-design-animation_151150-16471.jpg" alt="" width="100" />
  //       <img src={ReactImg} alt="" width="400" />
  //     </Fragment>
  //   )
  // }


  // function Add() {
  //   let a = 30;
  //   let b = 20;
  //   return (
  //     <>
  //       <p>{a + b}</p>
  //       <p>{a > b ? "A is Big" : "B is Big"}</p>
  //     </>
  //   )
  // }

  // function MyArr(){
  //   let arr= ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"]
  //   return(
  //     <Fragment>
  //       {arr.map(el=><div>{el}</div>)}
  //     </Fragment>
  //   )

  const [name, setName] = useState("Karan")
  return (
    <UsernameContext.Provider value={{name , setName}}>
      <RouterProvider router={router} />
    </UsernameContext.Provider>
  )
}

export default App
