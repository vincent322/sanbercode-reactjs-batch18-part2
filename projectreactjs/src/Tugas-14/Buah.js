import React from "react"
import {BuahProvider} from './BuahContext'
import {InputProvider} from './InputContext'
import BuahForm from './FormBuah'
import ListBuah from "./ListBuah"

const Buah = ()=>{
  return(
    <>
      <BuahProvider>
          <InputProvider>
        <ListBuah/>
        <BuahForm/>
        </InputProvider>
      </BuahProvider>
    </>
  )

}

export default Buah