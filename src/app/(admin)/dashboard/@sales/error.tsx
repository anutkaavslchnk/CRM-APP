'use client';
import React from "react";

export interface ErrorProps  {
    error:Error;
};

export default function Error({}: ErrorProps) {
  return <div>unexpected error inside slot sales</div>;
}
