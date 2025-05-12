import Aims from "@/components/Aims";
import Banner from "@/components/Banner";
import Campaigns from "@/components/Campaigns";
import LandingSection from "@/components/LandingSection";
import Newsletters from "@/components/Newsletters";
import PostsShowcase from "@/components/PostsShowcase";
import ShortAbout from "@/components/ShortAbout";

export default function Home() {
  return (
    <section>
      <LandingSection />
      <Aims />
      <ShortAbout />
      <PostsShowcase />
      <Campaigns />
      <Banner />
      <Newsletters />
    </section>
  );
}
