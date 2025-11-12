import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-[#F1F1F1] h-[842px] w-full flex justify-center items-end overflow-hidden">
      {/* Desktop View */}
      <div className="hidden md:flex justify-center items-end h-full relative">
        <div className="flex items-end justify-center relative">
          {/* Image 1 (Left) */}
          <div className="relative w-[560px] h-[820px] border border-gray-300 overflow-hidden bg-[#F1F1F1]">
            <Image
              src="/hero/glass-removebg-preview.png"
              alt="Hero Image 1"
              fill
              className="object-contain scale-105 translate-y-[10px] transition-transform duration-700"
            />
          </div>

          {/* Image 2 (Middle – larger, touching bottom) */}
          <div className="relative w-[620px] h-[842px] border border-gray-300 overflow-hidden bg-[#F1F1F1] z-10">
            <Image
              src="/hero/girl.png"
              alt="Hero Image 2"
              fill
              className="object-contain scale-[1.6] mt-20 transition-transform duration-700"
            />
          </div>

          {/* Image 3 (Right) */}
          <div className="relative w-[560px] h-[820px] ml-20 border border-gray-300 overflow-hidden bg-[#F1F1F1]">
            <Image
              src="/hero/glass2-removebg-preview.png"
              alt="Hero Image 3"
              fill
              className="object-contain scale-100 translate-y-[10px] transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* 🧩 Overlay Layer (Text, Icons, Buttons go here) */}
      <div className="absolute left-[40px] bottom-[40px] md:left-[40px] md:top-[40px] flex flex-col justify-center items-center z-20 w-[417px] h-[121px] md:w-[492px] md:h-[110px]">
        <Image src="/logo/back.svg" fill alt="Details" />
      </div>

      <div className="absolute hidden left-[40px] bottom-[40px] md:flex justify-center items-center z-20 w-[292px] gap-[12px] h-[44px] ">
        <button className="text-[#2077BC] border border-[#2077BC] rounded-[8px] p-[8px] w-[140px] h-[44px] flex items-center justify-center">
          <Image src="/icons/box.svg" height={20} width={20} alt="Box" />
          3D View
        </button>
        <button className="text-[#2077BC] border border-[#2077BC] rounded-[8px] p-[8px] w-[140px] h-[44px] flex justify-center items-center">
          <Image src="/icons/try-on.svg" height={20} width={20} alt="Box" />
          Try On
        </button>
      </div>

      {/* Mobile View (only first image) */}
      <div className="md:hidden flex justify-center items-end h-full relative w-full">
        <div className="relative w-[504px] h-[527]  overflow-hidden bg-[#F1F1F1] ">
          <Image
            src="/hero/glass-removebg-preview.png"
            alt="Hero Image Mobile"
            fill
            className="object-contain scale-110 translate-y-[12px] transition-transform duration-700"
          />
        </div>
        <div className="absolute right-[20px] bottom-[120px] md:left-[40px] md:top-[40px] flex flex-col justify-center items-center z-20 ">
          <Image src="/logo/like.svg" height={44} width={44} alt="Like" />
          <Image src="/logo/cart.svg" height={44} width={44} alt="Cart" />
          <Image
            src="/logo/view.svg"
            height={44}
            width={44}
            alt="Notification"
          />
          <Image
            src="/logo/Single-icon-button.svg"
            height={44}
            width={44}
            alt="Profile"
          />
        </div>

        <div className="absolute right-[20px] top-[20px] md:hidden flex flex-col justify-center items-center z-20 ">
          <Image
            src="/logo/Single-icon-button.svg"
            height={44}
            width={44}
            alt="Notification"
          />
          <Image
            src="/logo/Single icon button (2).svg"
            height={44}
            width={44}
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
}
