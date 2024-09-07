import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
  description: 'About page ',
  keywords: ['algo']
};
export default function AboutPage() {
  return (
    <main className="flex flex-col items-center">
      <span className="text-7xl">Abut Page</span>
    </main>
  )
}