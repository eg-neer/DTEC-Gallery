import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Full-width navbar at the very top */}
      <nav
        style={{ backgroundColor: "#1A1D29" }}
        className="hidden lg:flex items-center gap-8 w-full px-8 h-35"
      >
        <Image
          className="dark:invert ml-16 mr-10"
          src="/logo.png"
          alt="Next.js logo"
          width={180}
          height={25}
          priority
        />
          <a
            href="#home"
            className="text-white text-base cursor-pointer relative inline-block after:block after:h-[2px] after:bg-[#e68c3a] after:absolute after:bottom-0 after:left-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white text-base cursor-pointer relative inline-block after:block after:h-[2px] after:bg-[#e68c3a] after:absolute after:bottom-0 after:left-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
          <a
            href="#services"
            className="text-white text-base cursor-pointer relative inline-block after:block after:h-[2px] after:bg-[#e68c3a] after:absolute after:bottom-0 after:left-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Services
          </a>
          <a
            href="#contacts"
            className="text-white text-base cursor-pointer relative inline-block after:block after:h-[2px] after:bg-[#e68c3a] after:absolute after:bottom-0 after:left-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contacts
          </a>
      </nav>

      {/* Main content grid */}
      <div
        style={{ backgroundColor: "#ffffffff" }}
        className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
      >
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          
        </main>
      </div>
      <footer
        style={{ backgroundColor: "#919191ff" }}
        className="flex gap-[24px] flex-wrap items-center justify-center w-full h-40"
      >
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </>
  );
}
