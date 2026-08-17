import { supabase } from "@/lib/supabase-client";

export default async function Home() {
  const { data, error } = await supabase
    .from("rooms")
    .select("*");

  console.log("Data:", data);
  console.log("Error:", error);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 p-6">
  <div className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
    <div className="flex items-center gap-2 mb-4">
      <span
        className={`w-2.5 h-2.5 rounded-full ${
          error ? "bg-red-500" : "bg-emerald-500"
        }`}
      />
      <h1 className="text-lg font-semibold text-slate-100">
        Supabase connection tests
      </h1>
    </div>

    <p className="text-sm text-slate-400 mb-4">
      {error ? "Connection failed" : data ? "Connected successfully" : "Checking connection…"}
    </p>

    <pre className="text-xs leading-relaxed text-slate-300 bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto">
      {JSON.stringify({ data, error }, null, 2)}
    </pre>
  </div>
</main>
  );
}