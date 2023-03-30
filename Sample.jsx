import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Sample = () => {
    var[input,setInput]=useState();
    var[input2,setInput2]=useState();
        const inputHandle=(event)=> {
            setInput(event.target.value)
            console.log(input)
        }
        const inputHandle2 =(e)=>{
            setInput2(e.target.value)
        }
  return (
    <div>
        <Typography> {input}</Typography>
        <Typography>{input2}</Typography>
        <br/>
      <TextField id="outlined-basic" label="FirstName" onChange={inputHandle} />
      <br/>
      <br/>
<TextField id="filled-basic" label="Second Name" onChange={inputHandle2}/>
<br/>
<Button variant="outlined">Submit</Button>
    </div>
  )
}

export default Sample
