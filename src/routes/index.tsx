import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UPtoME — Treine seus líderes em tempo real" },
      {
        name: "description",
        content:
          "UPtoME: IA que treina o líder em tempo real e ajuda a mitigar o risco psicossocial da NR-1. Feedback por áudio, sem burocracia. Faça o diagnóstico grátis.",
      },
      { property: "og:title", content: "UPtoME — Treine seus líderes em tempo real" },
      {
        property: "og:description",
        content:
          "UPtoME: IA que treina o líder em tempo real e ajuda a mitigar o risco psicossocial da NR-1. Feedback por áudio, sem burocracia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}
