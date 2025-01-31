import Link from "next/link";
import React from "react";

export interface Props {};

export default function NotFound({}: Props) {
  return (
  <div>
    <p>Could not found</p>
    <Link href='/companies' className="text-blue-500">Back to companies</Link>
  </div>
)
}
