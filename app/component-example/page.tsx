import { CommandDemo } from "./_components/CommandDemo";
import DialogDemo from "./_components/DialogDemo";

export default function Home() {
  return (
    <main className="flex min-h-screen items-top justify-center gap-x-10 p-24">
      <DialogDemo />
      <CommandDemo />
    </main>
  );
}
