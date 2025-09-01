import React from 'react'
import Left from './home/Left/Left'
import Right from './home/Right/Right'
import Logout from './home/left1/Logout'

function App() {
  return (
    <> 
    <div className='flex h-screen'>
      <Logout></Logout>
      <Left></Left>
      <Right></Right>
    </div>
      
    </>
  )
}

export default App
