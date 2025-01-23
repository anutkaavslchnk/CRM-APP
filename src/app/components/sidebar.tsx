import React from 'react';
import Image from 'next/image';
import SidebarItem from './sidebar-item';
import logo from '/public/logo.svg';
import squares from '/public/squares.svg';
import briefcase from '/public/briefcase.svg';
import arrow_rec from '/public/wow-left-rec.svg'
export interface SidebarProps {}
export default function Sidebar({}: SidebarProps) {
  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <Image
          className="py-8 mb-11 mx-auto"
          width={122}
          height={25}
          src={logo}
          alt="logo"
        />
        <ul className="space-y-7">
          <SidebarItem
            pathname="/dashboard"
            src={squares}
            alt="dashboard icon"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            pathname="/companies"
            src={briefcase}
            alt="companies icon"
          >
            Companies
          </SidebarItem>
        </ul>
        <button className="flex items-center gap-2 p-6 mt-auto mx-auto">
          <Image
            width={18}
            height={18}
            src={arrow_rec}
            alt="exit icon"
          />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
}