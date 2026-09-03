import React, { useContext } from 'react'
import { UsernameContext } from '../context/Context'
import { Button } from 'react-bootstrap'

export const ComponentC = () => {
  const { name, setName } = useContext(UsernameContext)

  return (
    <div>
      <hr />
      ComponentC

      Name is {name}
      <br />
      <Button variant='primary' className='mt-3' onClick={()=>{setName(name==="Karan" ? "Karan Kartikey" : "Karan")}}>Name Toggle</Button>
      <hr />

    </div>
  )
}
