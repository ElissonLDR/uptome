import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/uptome-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UPtoME" },
      { name: "description", content: "UPtoME — desenvolvimento de pessoas e potencial humano." },
      { property: "og:title", content: "UPtoME" },
      {
        property: "og:description",
        content: "UPtoME — desenvolvimento de pessoas e potencial humano.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
      <h1 className="sr-only">UPtoME</h1>
      <img
        src={logo.url}
        alt="UPtoME"
        className="relative w-[min(78vw,30rem)] animate-in fade-in zoom-in-95 duration-700"
      />
    </main>
  );
}
