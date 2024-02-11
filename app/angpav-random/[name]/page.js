import FireworkComponent from "@/components/firework/ForworkComponent";

import { giveGiftBasedOnName } from "@/utils/Name";
export default function Page({ params }) {
  const name = params?.name.replace("%20", " ");
  return (
    <main className="flex flex-col justify-center h-screen items-center gap-2">
      <div className="flex flex-col justify-center items-center mt-5 gap-4">
        <FireworkComponent />
        <p className="text-3xl md:text-5xl">រីករាយពិធីបុណ្យចូលឆ្នាំចិន</p>
        <p className="text-center text-2xl font-mono">{name} ❤️</p>
      </div>
      {/*  */}
      <div className="flex flex-col justify-center items-center mt-5 gap-4">
        <p className="text-2xl md:text-5xl">អ្នកនឹងទទួលបាន</p>
        <p className="text-center text-2xl font-mono">{`${giveGiftBasedOnName(
          name
        )}`}</p>
        
        <FireworkComponent />
      </div>
    </main>
  );
}
