import Image from "next/image";
import { LuMail, LuPhone, LuPin } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen p-8">
      <Image
        src="/logo.svg"
        alt="Hotel Royal Empire"
        width={284}
        height={186}
      />
      <h1 className="text-4xl font-bold mt-8 text-white">Coming Soon....</h1>
      <div className="text-white font-medium lg:text-xl text-center mt-8 inline-flex items-center gap-2">
        <div>
          <CiLocationOn className="w-8 h-8 text-yellow-600" />
        </div>
        <div>
          7 Floor, Yash Empire Complex, Koba Rd, Nr. PDPU Cross Road, Opp. Radhe
          Times, Gandhinagar, Gujarat 382007, India
        </div>
      </div>
      <div className="mt-4 text-white inline-flex items-center gap-2 text-xl">
        <div>
          <LuMail className="w-5 h-5 text-yellow-600" />
        </div>
        <div>
          <a
            className="hover:text-white/80"
            href="mailto:hotelroyalempire599@gmail.com"
            target="_blank"
          >
            hotelroyalempire599@gmail.com
          </a>
        </div>
      </div>
      <div className="mt-4 text-white inline-flex items-center gap-2 text-xl">
        <div>
          <LuPhone className="w-5 h-5 text-yellow-600" />
        </div>
        <div>
          <a
            className="hover:text-white/80"
            href="tel:9925043599"
            target="_blank"
          >
            +91 99250 43599
          </a>
        </div>
      </div>
    </div>
  );
}
