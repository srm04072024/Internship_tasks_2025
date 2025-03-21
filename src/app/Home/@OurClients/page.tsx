import Image from "next/image";
import Marquee from "react-fast-marquee";
export default function OurClients() {
  return (
    <div className="mt-8 mb-4">
      <h1 className="section-header">Our Clients</h1>
      <div className="" data-aos="zoom-in">
        <Marquee pauseOnHover={true} gradient={false} speed={100}>
          <Image
            src="/client/8.png"
            alt="client logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/client/11.png"
            alt="client logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/client/12.png"
            alt="client logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/client/13.png"
            alt="client logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/client/14.png"
            alt="client logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/client/15.png"
            alt="client logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/client/16.png"
            alt="client logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/client/17.png"
            alt="client logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/client/18.png"
            alt="client logo"
            className="Logo"
            height={150}
            width={150}
          />
          <Image
            src="/client/19.png"
            alt="client logo"
            className="Logo"
            height={150}
            width={150}
          />
        </Marquee>
      </div>
    </div>
  );
}
