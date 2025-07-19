import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Full-width navbar at the very top */}
      <nav
        style={{ backgroundColor: "#1A1D29" }}
        className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 w-full px-4 py-4 lg:px-8 lg:py-0"
      >
        <Image
          className="dark:invert ml-0 mr-8 lg:ml-16 lg:mr-16"
          src="/logo.png"
          alt="Next.js logo"
          width={180}
          height={25}
          priority
        />
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 w-full justify-center lg:justify-start">
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
        </div>
      </nav>

      {/* Main content grid */}
      <div
        style={{ backgroundColor: "#ffffffff" }}
        className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-4 sm:p-8 pb-20 gap-8 sm:gap-16"
      >
        <main className="flex flex-col gap-8 sm:gap-[32px] row-start-2 items-center w-full max-w-4xl mx-auto text-center">
          {/* Add your main content here. Example placeholder: */}
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">Welcome to DTEC</h1>
          <p className="text-base sm:text-lg">This is a responsive Next.js page.</p>
        </main>
      </div>
      <footer
        style={{ backgroundColor: "#919191ff" }}
        className="flex flex-wrap items-center justify-center w-full gap-6 px-4 py-6 sm:gap-[24px] sm:flex-row sm:h-40 flex-col"
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
