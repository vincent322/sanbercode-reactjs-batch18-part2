import React from "react"
import {BuahProvider} from './BuahContext'
import {InputProvider} from './InputContext'
import BuahForm from './FormBuah'
import ListBuah from "./ListBuah"

const Buah = ()=>{
  return(
    <div className="tugas">
      <BuahProvider>
          <InputProvider>
        <ListBuah/>
        <BuahForm/>
        </InputProvider>
      </BuahProvider>
    </div>
  )

}

export default Buah