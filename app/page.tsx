import { CommandDemo } from "@/components/CommandDemo";
import DialogDemo from "@/components/DialogDemo";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-x-10 p-24">
      <DialogDemo />
      <CommandDemo />
    </main>
  );
}
