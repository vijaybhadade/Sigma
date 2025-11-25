import AmazonCard from "./amazonCard.jsx";

export default function AmazonTab() {
  return (
    <>
      <h1>Blockbuster Deals on Computer Accessories | Shop Now</h1>

      <div className="amazonContainer">
        <AmazonCard
          title="Logitech MX Master"
          description={["8000 DPI", "5 Programmable Buttons"]}
          price="8,999"
        />

        <AmazonCard
          title="Apple Pencil (2nd Gen)"
          description={["Intuitive Touch Surface", "Designed for iPad Pro"]}
          price="9,199"
        />

        <AmazonCard
          title="Zebronics"
          description={["Designed for iPad Pro", "Intuitive Touch Surface"]}
          price="899"
          stripColor="yellow"
        />

        <AmazonCard
          title="Petronics Toad"
          description={["Wireless Mouse 2.4GHz", "Optical Orientation"]}
          price="278"
        />
      </div>
    </>
  );
}
