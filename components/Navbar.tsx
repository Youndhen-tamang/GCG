import Image from "next/image";

export default function Navbar() {
  return (
    <>
      {/* Desktop Navbar */}
      <section className="w-full px-[40px] py-[12px] justify-between items-center hidden md:flex">
        {/* Left Section: Logo & Menu */}
        <div className="flex gap-7 items-center">
          <Image src="/logo/Logo.svg" height={44} width={45} alt="GCG_Wears" />
          <h1 className="text-lg text-[#5D5D5D]">Menu</h1>
        </div>

        {/* Middle Section: Search */}
        <div className="flex-1 max-w-md mx-4 hidden md:flex gap-[8px]">
          <div className="flex items-center w-full border border-gray-200 rounded-[8px] shadow-sm px-4 py-2 focus-within:ring-1 focus-within:ring-gray-300 transition">
            <input
              type="text"
              placeholder="Search sunglasses here..."
              className="flex-1 text-sm md:text-base outline-none placeholder-gray-400"
            />
            <Image
              src="/logo/search.svg"
              height={20}
              width={20}
              alt="Search Icon"
              className="cursor-pointer"
            />
          </div>
          <Image src="/logo/voice.svg" height={44} width={40} alt="Voice_search" />
          <Image src="/logo/photo.svg" height={44} width={40} alt="PhotoSerach" />
        </div>

        {/* Right Section */}
        <div className="items-center gap-[8px] hidden md:flex">
          <Image src="/logo/like.svg" height={44} width={44} alt="Like" />
          <Image src="/logo/cart.svg" height={44} width={44} alt="Cart" />
          <Image src="/logo/notify.svg" height={44} width={44} alt="Notification" />
          <Image src="/logo/profile.svg" height={44} width={44} alt="Profile" />
        </div>
      </section>

      {/* Mobile Navbar */}
      <section className="w-full px-[16px] py-[8px] flex justify-between items-center md:hidden bg-white shadow-sm">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image
            src="/logo/Logo.svg"
            height={36}
            width={33}
            alt="GCG_Wears"
            className="object-contain"
          />
        </div>

        {/* Right: Notification + Menu */}
        <div className="flex items-center gap-[8px]">
          <Image
            src="/logo/notify.svg"
            height={36}
            width={33}
            alt="Notification"
            className="cursor-pointer"
          />
          <Image
            src="/logo/menu.svg"
            height={36}
            width={33}
            alt="Menu"
            className="cursor-pointer"
          />
        </div>
      </section>
    </>
  );
}
