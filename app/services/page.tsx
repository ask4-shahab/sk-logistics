import type { Metadata } from "next";
import DivisionDetail from "@/components/DivisionDetail";
import { DIVISIONS } from "@/lib/data";

export const metadata: Metadata = { title: "Divisions" };

export default function Services() {
  return <DivisionDetail cur={DIVISIONS[0]} />;
}
