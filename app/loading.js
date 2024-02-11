import LoadingComponent from "@/components/loading/LoadingComponent";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="flex justify-center items-center h-screen">
      <div>
        {/* <p className="animate-pulse">Loading...</p>
         */}
        <LoadingComponent />
      </div>
    </main>
  );
}
