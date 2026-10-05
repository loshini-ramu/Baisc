import React from 'react'
import child from './child'

export default function Navbar({b}) {
  return (
    <div>
      
      <p1>Hello Navbar{b}</p1>
      <child b={b}/>
    
    </div>  )
}
