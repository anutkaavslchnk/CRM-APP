"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import PromotionFormModal from "@/app/components/promotion-form-modal";

export default function Page() {
  const params = useParams(); // Ensure you get params dynamically
  const router = useRouter();

  if (!params?.id) {
    return <div>Error: No company ID provided</div>;
  }

  return (
    <PromotionFormModal
      companyId={params.id as string}
      show={true}
      onClose={() => router.back()}
    />
  );
}
