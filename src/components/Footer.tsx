import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#271b1b] text-white text-center py-[2em] text-[1em]">
      <div className="flex justify-between px-[5vw]">
        <div className="flex flex-col items-start">
          <h1 className="section-header text-[2em] mb-[1em]">
            DZYN<span className="text-red-500">FOX</span>
          </h1>
          <p>A Brand of Markall - Marketing All Out</p>
          <p>COPYRIGHT &copy; DzynFox Visual Communications LLP</p>
          <p className="text-[0.5rem] mt-2">
            Images designed with the help of{" "}
            <Link
              className="text-white"
              href="https://www.freepik.com"
              target="_blank"
              rel="nofollow noreferrer"
            >
              Freepik
            </Link>
          </p>
        </div>
        <div className="text-right">
          <h2 className="mb-4 opacity-[0.7]">Our Address</h2>
          <p>
            B101-Amrapali <br />
            Sector-3, Vaishali <br />
            Ghaziabad - 201010
          </p>
        </div>
      </div>
    </div>
  );
}
