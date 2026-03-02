import {
  HeroSection,
  BrandsStrip,
  NewArrivals,
  TopSelling,
  BrowseByStyle,
  CustomerReviews,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandsStrip />
      <NewArrivals />
      <TopSelling />
      <BrowseByStyle />
      <CustomerReviews />
    </>
  );
}
