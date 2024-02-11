import FireworkComponent from "@/components/firework/ForworkComponent";
import PopupComponent from "@/components/popup/PopUpComponent";

export default function Home() {
  return (
    <main className="flex justify-center">
      <FireworkComponent />
      <div className="flex flex-col justify-center items-center h-screen gap-2">
        <img
          security="restricted"
          src="/images/Chinese_Envelope.png"
          className="w-60 animate-bounce focus:outline-none hover:animate-none hover:cursor-pointer duration-100"
        />
        <div className="flex flex-col gap-8 items-center">
          <div className="text-3xl md:text-6xl">រីករាយពិធីបុណ្យចូលឆ្នាំចិន</div>
          <PopupComponent />
        </div>
      </div>
    </main>
  );
}
