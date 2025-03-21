export default function Home({
  Hero,
  OtherBrands,
  OurClients,
  WhyUs,
  ContactForm,
}: {
  Hero: React.ReactNode;
  OtherBrands: React.ReactNode;
  OurClients: React.ReactNode;
  WhyUs: React.ReactNode;
  ContactForm: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <div>{Hero}</div>
      <div>{WhyUs}</div>
      <div>{OtherBrands}</div>
      <div>{OurClients}</div>
      <div>{ContactForm}</div>
    </div>
  );
}
