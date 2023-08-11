 import React from 'react'
 
 export const App = () => {
   return (
     <>
     <h1>hello</h1>

     <button onClick={async()=>{
     const response = await fetch("http://127.0.0.1:3000/users")
     const data = await response.json()
     console.log(data)
     }}>
      Obtener datos
     </button>
     </>
   )
 }
 