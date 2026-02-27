import Navbar from "../components/Navbar";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-8 py-32">
        <h1 className="text-5xl font-black mb-8">Projects</h1>
        <p className="text-lg text-slate-600 mb-4">
          This is the dedicated Projects page. Showcase your completed projects
          and gallery here.
        </p>
      </main>
    </>
  );
}
