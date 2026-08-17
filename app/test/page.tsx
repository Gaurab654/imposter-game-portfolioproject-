import { supabase } from "@/lib/supabase-client";

export default async function Home() {
  const { data, error } = await supabase
    .from("rooms")
    .select("*");

  console.log("Data:", data);
  console.log("Error:", error);

  return (
    <main>
      <h1>Supabase Connection Test</h1>
      <pre>{JSON.stringify({ data, error }, null, 2)}</pre>
    </main>
  );
}