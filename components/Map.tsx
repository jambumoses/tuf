import React from "react";

export default function Map() {
  return (
    <div className="flex flex-col justify-center items-center p-0 w-full h-[300px] bg-gray-400/10 mb-[100px] mt-[100px] rounded-lg">
      <iframe
        className="w-full h-full border-none bg-background rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127552.35422050084!2d32.85334480922296!3d-2.503233506605883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19ce64c6498cfb91%3A0x7529260a7f23a51d!2sMwanza%2C%20Tanzania!5e0!3m2!1sen!2sug!4v1746694103319!5m2!1sen!2sug"
        loading="lazy"
        /* referrerpolicy="no-referrer-when-downgrade" */
      ></iframe>
    </div>
  );
}
