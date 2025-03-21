export default function HeroSection() {
  return (
    <div className="flex" style={{ minHeight: "calc(100vh - 9vw)" }}>
      <main className=" flex justify-between mx-auto my-auto w-[90vw]">
        <div className=" flex-col justify-center" data-aos="fade-right">
          <h1 className="text-[2.5vw]">
            <span className=" text-red-500 block font-[800] text-[1.5em]">
              Creativity <span className="text-black">&amp;</span>
              <br /> Imagination
            </span>
            are the world&apos;s greatest weapons
            <br />
            on this planet
          </h1>
          <div className="my-[1.6px]">
            <p className="text-[2vw]">We have them in abundance</p>
            <p className="text-[2.5vw] text-red-500 font-[800]">
              Have us to grow your business
            </p>
          </div>
        </div>
        <div className="w-[40vw] relative" data-aos="fade-up">
          {/* <img src={animation} alt="Creativity"/> */}
          <video autoPlay loop muted>
            <source src="/animation.mp4" type="video/mp4" />
          </video>
        </div>
      </main>
    </div>
  );
}
