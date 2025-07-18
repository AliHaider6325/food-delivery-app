import FeaturedItems from "@/src/components/FeaturedItems";
import Offer from "@/src/components/Offer";
import Slider from "@/src/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Slider />
      <FeaturedItems />
      <Offer />
    </div>
  );
}
