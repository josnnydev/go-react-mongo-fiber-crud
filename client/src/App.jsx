 import React, { useEffect } from 'react'
 import { useState } from 'react'
 
 export const App = () => {

  const [name, setName] = useState("")
  const [users, setUsers] = useState([])

  async function loadUsers(){
    const response = await fetch(import.meta.env.VITE_API + "/users")
  const data = await response.json()
  setUsers(data.users)
   

  }

  useEffect(()=>{

  
    loadUsers()
    
  },[])

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const response = await fetch(import.meta.env.VITE_API + "/users",{
      method: "POST",
      body: JSON.stringify({name}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
     
    loadUsers()

  }
   return (
     <>
     <h1>hello</h1>

     {/* <button onClick={async()=>{
     const response = await fetch("/users")
     const data = await response.json()
     console.log(data)
     }}>
      Obtener datos
     </button> */}

     <form onSubmit={handleSubmit} method="post">
      <input type="text" name="name" placeholder='coloca tu nombre' onChange={e=> setName(e.target.value)} />

      <button>Save</button>


     </form>

     <ul>
      {users.map(user=> (
        <li key={user._id}>{user.name} {user._id}</li>
      ))}
     </ul>
     </>
   )
 }
 