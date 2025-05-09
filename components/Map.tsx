import React from "react";

export default function Map() {
  return (
    <div className="flex flex-col justify-center items-center p-0 w-full h-[300px] bg-gray-400/10 mb-[100px] mt-[100px] rounded-lg">
      <iframe
        className="w-full h-full border-1 border-zinc-200 bg-background rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10416.765753281567!2d33.277060576895124!3d-2.5171446879047306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19cdce72e4cec5d3%3A0x3001d3e5de5e3a8f!2sKitongo%2C%20Tanzania!5e0!3m2!1sen!2sug!4v1746807537840!5m2!1sen!2sug"
        loading="lazy"
        /* referrerpolicy="no-referrer-when-downgrade" */
      ></iframe>
    </div>
  );
}
