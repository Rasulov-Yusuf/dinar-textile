"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function InitAOS() {
  useEffect(() => {
    AOS.init({
      duration: 600, // animatsiya davomiyligi
      once: true, // qayta scroll qilinganda takrorlamaydi
    });
  }, []);

  return null;
}
