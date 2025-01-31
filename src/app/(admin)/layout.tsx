
import Sidebar from '@/app/components/sidebar';
import React from 'react';



export interface LayoutProps{
children:React.ReactNode
}


export default function Layout({children}: LayoutProps) {
   console.log("rendering")
  return (
<>
<Sidebar></Sidebar>
<div className="ml-60">{children}</div>
</>
  );
}