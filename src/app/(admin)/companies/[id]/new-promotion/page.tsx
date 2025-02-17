"use client";

import React from "react";
import { useParams } from "next/navigation";
import PromotionForm from "@/app/components/promotion-form";

export default function Page() {
  const params = useParams(); // Dynamically get params

  if (!params?.id) {
    return <div>Error: No company ID provided</div>;
  }

  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={params.id as string} />
    </div>
  );
}
