import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Type from './Type'

function Right() {
  return (
    <div className='w-[70%]  bg-slate-950 text-white'>

      <Chatuser></Chatuser>
      <div style={{ maxHeight: "calc(88vh - 8vh" }} className='py-2 overflow-y-auto flex-ankit'>
        <Messages></Messages>
      </div>
      <Type></Type>
    </div>
  )
}

export default Right
