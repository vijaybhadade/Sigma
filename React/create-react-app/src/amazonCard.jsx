import "./amazonCard.css";

export default function AmazonCard({ title, description = [], price, stripColor }) {
  return (
    <div className="amazonCard">
      <h2>{title}</h2>

      {description.map((line) => (
        <p >{line}</p>
      ))}

      <div className="priceStrip" style={{ backgroundColor: stripColor = "#f5d97c" }}>
        <h3>{price}</h3>
      </div>
    </div>
  );
}
