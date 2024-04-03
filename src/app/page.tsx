import Form from "@/Components/Form/Form";
import { formData } from "@/types";
import { promises as fs } from 'fs';
import Image from "next/image";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/formData.json', 'utf8');
  const data:formData = JSON.parse(file);

  return (
    <main className="flex flex-row-reverse min-h-screen items-center justify-between p-4 bg-gray-50">
      <div className="w-1/3"> 
        <Image src="/buildings.jpg" alt="black and white urban picture" width={1000} height={1000}/>
      </div>
      <Form formData={data}/>
    </main>
  );
}
