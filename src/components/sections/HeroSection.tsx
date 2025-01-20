import { Container } from "../ui/Container";
import ctoBanner from "@/assets/cto_banner.png";
import image1 from "@/assets/t1b.png";
import image2 from "@/assets/t2.png";
import image3 from "@/assets/t3b.png";
import image4 from "@/assets/t5.png";
// import bannerToken from "@/assets/_bannertoken.png";
// import trump2 from "@/assets/trump2.jpg";
import { Heading } from "../ui/Heading";
import { VelocityScroll } from "../ui/scroll-based-velocity";
import { BuySection } from "./BuySection";
import webBg from "@/assets/web_bg.png";
import { About } from "./About";
import { Faqs } from "./Faqs";
import { Allocation } from "./Allocation";
import { MarqueeAnimation } from "../ui/marquee-effect";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Footer } from "../sections/Footer";

const carouselImages = [
  { src: image1, alt: "Description 1" },
  { src: image2, alt: "Description 2" },
  { src: image3, alt: "Description 3" },
  { src: image4, alt: "Description 4" },
];

export function HeroSection() {
  return (
    <>
      <section id="home" className="relative min-h-screen text-white bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={webBg}
            alt="Background"
            className="object-cover w-full h-full opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/75" />
        </div>

        {/* Main Hero Content */}
        <Container className="relative z-10 pt-16 pb-16">
          {" "}
          {/* Increased top padding for navbar space */}
          <div className="flex flex-col items-center space-y-8">
            {/* Logo and Title Section */}
            <div className="w-full max-w-3xl mx-auto text-center">
              {/* <div className="relative aspect-square max-w-[400px] mx-auto">
                <img
                  src={bannerToken}
                  alt="SolTimeHigh Logo"
                  className="object-contain w-full h-full animate-fade-in"
                />
              </div> */}

              {/* Carousel Implementation */}
              <div className="relative w-full max-w-2xl py-4 mx-auto mt-2">
                <Carousel
                  opts={{
                    align: "center",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {carouselImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative p-1">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full rounded-lg aspect-[16/9] object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="text-white border-none left-2 bg-black/50 hover:bg-black/70" />
                  <CarouselNext className="text-white border-none right-2 bg-black/50 hover:bg-black/70" />
                </Carousel>
              </div>

              <div className="space-y-4">
                <Heading size="4xl">
                  <span className="text-goldAccent">Sol</span>
                  <span className="text-white">TimeHigh</span>
                </Heading>
                {/* //carousel */}

                <p className="text-xl font-normal md:text-2xl font-isidora text-goldAccent">
                  Stand for Something
                </p>

                <p className="text-lg font-geist text-slate-400">
                  Make Memecoins Great Again
                </p>
              </div>
            </div>

            {/* Matrix/Pill Image Section */}
            <div className="w-full max-w-4xl mx-auto">
              <img
                src={ctoBanner}
                alt="The Choice is Yours"
                className="w-full h-auto shadow-2xl rounded-3xl animate-fade-in"
              />
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <a
                href="https://jup.ag/swap/SOL-D7tDpW8MnsEb3dpMnUSKv2uTZmVVGaEhcM9HHibSmoon"
                className="bg-[#DC2626] text-white px-8 py-3 rounded-full 
                  hover:bg-red-700 transition-all duration-300 text-lg font-geistmono
                  hover:scale-105 transform"
              >
                Buy Now
              </a>
              <a
                href="https://x.com/soltimehigh/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 text-lg transition-all duration-300 transform border-2 rounded-full border-goldAccent text-goldAccent hover:bg-goldAccent hover:text-black font-geistmono hover:scale-105"
              >
                Join Community
              </a>
            </div>
          </div>
        </Container>

        <div className="relative z-10">
          <Heading className="max-w-4xl mx-auto text-center">
            Join the Cult
          </Heading>
          <Heading size="3xl" className="max-w-4xl mx-auto mt-2 text-center">
            Make Memecoins Great Again
          </Heading>
        </div>
      </section>

      {/* Velocity Scroll Text */}
      <div className="py-12 bg-black">
        <VelocityScroll
          text="$STH"
          default_velocity={3}
          className="font-geist font-bold text-4xl md:text-6xl lg:text-8xl text-[#FFD700]"
        />
      </div>

      {/* Buy Section */}
      <BuySection />

      {/* About Section */}
      <About />

      {/* Allocation Section */}
      <Allocation />

      {/* Faqs Section */}
      <Faqs />

      {/* Marquee Animation */}
      <div className="py-12 bg-black border-t border-b border-goldAccent/20">
        <MarqueeAnimation
          baseVelocity={5}
          direction="left"
          className="text-4xl md:text-6xl lg:text-8xl text-goldAccent font-geist"
        >
          MAKE MEMECOINS GREAT AGAIN •
        </MarqueeAnimation>
      </div>

      {/* Add Footer at the end */}
      <Footer />
    </>
  );
}
