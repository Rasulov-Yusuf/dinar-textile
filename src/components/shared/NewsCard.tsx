import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function NewsCard() {
  return (
    <div className="border">
      <div>image</div>
      <div>sana</div>
      <div>title</div>
      <Button>
        <Link href={'/news'}>link</Link>
      </Button>
    </div>
  );
}
