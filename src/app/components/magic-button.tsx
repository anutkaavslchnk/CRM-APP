'use client';

import React, { useEffect, useState } from "react";
import Button from "./button";

type Props = {};

export default function MagicButton(props: Props)  {
const [count, setCount]=useState(0);
useEffect(()=>{
    if (count>0){
throw new Error('Unexpected error');
    }
},[count]);
  return (
  <Button {...props} onClick={()=>setCount(count+1)}>Magic button</Button>
)
};


