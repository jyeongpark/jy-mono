import Image from "next/image";

import { Button } from "@jy-mono/common";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Button size="large" label="button" />
      </div>
    </main>
  );
}
