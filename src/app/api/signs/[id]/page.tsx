"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Isigns } from "@/intefacies/Isigns";
const Sign = ({ params }) => {
  const [sign, setSign] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/signs/${params?.id}`);
      const data: Isigns = await response.json();

      setSign(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  return <div>{sign.name}</div>;
};

export default Sign;
