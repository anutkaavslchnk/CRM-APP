'use client';

import Button from "@/app/components/button";
import React from "react";

export interface  Props  {
    error:Error;
    reset:()=>void;
};

export default function Error({error,reset}: Props)  {
  return (
  <div>
    <p>{`Something went wrong ${error.message}`}</p>
    <Button onClick={()=>reset()}>Try again</Button>
  </div>
)
};


