import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DivisionDetail from "@/components/DivisionDetail";
import { DIVISIONS, getDivision } from "@/lib/data";

export function generateStaticParams() {
  return DIVISIONS.map((d) => ({ division: d.key }));
}

export async function generateMetadata(props: PageProps<"/services/[division]">): Promise<Metadata> {
  const { division } = await props.params;
  const d = getDivision(division);
  return { title: d?.name ?? "Divisions", description: d?.d1 };
}

export default async function DivisionPage(props: PageProps<"/services/[division]">) {
  const { division } = await props.params;
  const cur = getDivision(division);
  if (!cur) notFound();
  return <DivisionDetail cur={cur} />;
}
