import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Chakka = () => {
    var [input,setInput]=useState({
        value1:'',
        value2:'',
        value3:''
    })
    const inputHandler =(e)=>{
        const{name,value}=e.target
        setInput({...input,[name]:value})
    }


  return (
    <div>
        <br/>
    <Typography>{input.value1}</Typography>
    <TextField label='First name' name='value1' value={input.value1}
    onChange={inputHandler}></TextField>
    <br/>
    <br/>
    <Typography>{input.value2}</Typography>
    <TextField label='Last name' name='value2' value={input.value2}
    onChange={inputHandler}></TextField>
   
   <Typography>{input.value3}</Typography>
   <br/>
    <TextField label='confirm name' name='value3' value={input.value3}
    onChange={inputHandler}></TextField>
   <br/>
    </div>
  )
}

export default Chakka
