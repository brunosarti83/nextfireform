import Form from "@/Components/Form/Form";
import { formData } from "@/types";
import { promises as fs } from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/formData.json', 'utf8');
  const data:formData = JSON.parse(file);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form formData={data}/>
    </main>
  );
}
