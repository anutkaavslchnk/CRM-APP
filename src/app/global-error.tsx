'use client';
import React from "react";

export interface Props {};

export default function GlobalError({}: Props) {
  return (

    <html>
        <body>
        <div><p>Something globally went wrong</p></div>
        </body>
    </html>
  )
}
