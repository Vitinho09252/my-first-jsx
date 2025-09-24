const app = () => {
  return (
    <main className=" bg-slate-50">
      <h1 className="text-3xl font-bold text-slate-900">
        Hello tailwind + React!
      </h1>

      <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border p-4 bg-white shadow-sm">Card A</div>
        <div className="rounded-2xl border p-4 bg-white shadow-sm">Card B</div>
        <div className="rounded-2xl border p-4 bg-white shadow-sm">Card C</div>
      </div>
    </main>
  );
}
export default app 