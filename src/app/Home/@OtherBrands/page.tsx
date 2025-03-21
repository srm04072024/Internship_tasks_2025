import Image from "next/image";
import Marquee from "react-fast-marquee";
export default function OtherBrands() {
  return (
    <div className="mt-8 mb-4">
      <h1 className="section-header">Our Other Brands</h1>
      <div className="" data-aos="zoom-in">
        <Marquee pauseOnHover={true} gradient={false} speed={100}>
          <Image
            src="/brand/1.png"
            alt="Our other brand logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/brand/2.png"
            alt="Our other brand logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/brand/3.png"
            alt="Our other brand logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/brand/4.png"
            alt="Our other brand logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/brand/5.png"
            alt="Our other brand logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/brand/6.png"
            alt="Our other brand logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/brand/7.png"
            alt="Our other brand logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/brand/8.png"
            alt="Our other brand logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/brand/9.png"
            alt="Our other brand logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/brand/10.png"
            alt="Our other brand logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/brand/12.png"
            alt="Our other brand logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/brand/13.png"
            alt="Our other brand logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/brand/14.png"
            alt="Our other brand logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/brand/15.png"
            alt="Our other brand logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/brand/16.png"
            alt="Our other brand logo"
            className="Logo"
            height={150}
            width={150}
          />
        </Marquee>
      </div>
    </div>
  );
}
