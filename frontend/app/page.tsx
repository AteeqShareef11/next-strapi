import Image from "next/image";
import AcmeLogo from "@/app/ui/acme-logo";
import { lusitana } from "@/app/ui/fonts";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import Demo from "./ui/demo";

export default async function Page() {
  return <Demo />;
}
