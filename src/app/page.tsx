import { Metadata } from "next";
import HomePage from "./home/page";
export const metadata: Metadata = {
  title: "Дорзнак Next",
};
export default function Home() {
  return (
    <main className="main">
      <HomePage />
    </main>
  );
}
