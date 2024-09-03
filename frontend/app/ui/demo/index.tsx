import { fetchFeatures } from "@/app/lib/demo/data";
import Image from "next/image";
import Container from "./Container";

type Feature = {
  title: string;
  description: string;
  id: number;
};

export default async function Demo() {
  const features = await fetchFeatures();
  console.log(features);

  if (!features.length) {
    return <div>Loading...</div>;
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <div className="text-center mb-12">
        <h4 className="text-gray-500 font-medium">WHY CHOOSE US</h4>
        <h1 className="text-3xl font-bold my-3">
          We Are Different From Others
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Ipsa
          cupiditate accusantium recusandae soluta explicabo hic! Facere unde
          nam accusantium natus?
        </p>
      </div>
      <Container features={features} />
    </main>
  );
}
