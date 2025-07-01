import Hero from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import HotelInfo from "@/components/HotelInfo";
import Availability from "@/components/Availability";
export default function Home() {
  return (
    <>

      <Navbar />
      <main className="w-[1108px] mx-auto"> {/* padding top to avoid overlap */}
        <Hero />
        <HotelInfo />
        <Availability />

      </main>
      
    </>
  );
}
