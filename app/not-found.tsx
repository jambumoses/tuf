"use client"; // Make sure to use "use client" since you are using hooks.

//import { Button } from "@/components/ui/button";
import { ChevronLeft, ServerCrash } from "lucide-react";
import { useRouter } from "next/navigation"; // Import useRouter

export default function NotFound() {
  const router = useRouter(); // Initialize the router

  const handleGoBack = () => {
    router.back(); // Navigate to the previous page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-100">
      <h1 className="text-xl items-center font-semibold text-zinc-500 mb-4 flex flex-row gap-2">
        <ServerCrash className="size-5" />
        404 - Not Found
      </h1>
      <span className="text-zinc-500 text-xs mb-4">
        Sorry, the page you're looking for doesn't exist.
      </span>

      <span onClick={handleGoBack} className="flex flex-row items-center text-[13px] cursor-pointer">
        <ChevronLeft  className="size-4 mr-2" />
        Go back
      </span>
    </div>
  );
}
