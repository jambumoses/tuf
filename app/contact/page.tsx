import ContactBanner from "@/components/ContactBanner";
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
import Newsletters from "@/components/Newsletters";
import Socials from "@/components/Socials";
import React from "react";

export default function ContactPage() {
  return (
    <section className="mx-[5%]">
      <ContactBanner />
      {/* banner */}
      <div className="bg-zinc-300 w-full h-[200px] mt-[50px] rounded-lg"></div>
      <ContactForm />
      <Map />
      <Newsletters />
    </section>
  );
}
