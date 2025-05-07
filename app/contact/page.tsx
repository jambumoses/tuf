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
      <Socials />
      <ContactForm />
      <ContactDetails />
      <Map />
      <Newsletters />
    </section>
  );
}
