import Hero from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import HotelInfo from "@/components/HotelInfo";
import Availability from "@/components/Availability";
import AboutProperty from "@/components/AboutProperty";
import GuestReviews from "@/components/GuestReviews";
import RoomList from "@/components/RoomList";

export default function Home() {
  return (
    <>

      <Navbar />
      <main className="w-[1108px] mx-auto"> {/* padding top to avoid overlap */}
        <Hero />
        <HotelInfo />
        <Availability />
        <AboutProperty />
        <GuestReviews />
        <RoomList />


      </main>
      
    </>
  );
}
