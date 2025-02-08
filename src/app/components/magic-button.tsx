'use client';

import React, { useEffect, useState } from "react";
import Button from "./button";



export default function MagicButton()  {
const [count, setCount]=useState(0);
useEffect(()=>{
    if (count>0){
throw new Error('Unexpected error');
    }
},[count]);
  return (
  <Button  onClick={()=>setCount(count+1)}>Magic button</Button>
)
};


