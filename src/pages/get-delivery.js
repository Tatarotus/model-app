import React, { useState } from "react"
import Draggable from "react-draggable"

export default function Delivery() {
  return (
    <>
      <div className="flex justify-end m-3">
        <button className="p-3 text-white bg-green-500 box-border hover:bg-green-600">
          Add New!
        </button>
      </div>
      <div id="draggable-area" className="w-screen h-screen bg-gray-200 ">
        <Draggable axis="x" onStop={() => console.log(`stopped`)}>
          <div className="bg-blue-700 cursor-pointer main-box">Get Clients</div>
        </Draggable>
      </div>
    </>
  )
}
