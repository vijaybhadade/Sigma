import Product from './Product.jsx';

export default function ProductTab() {
  return (
    <>
      <Product 
        title="phone" 
        price="30k" 
        features={["hi-tech", "fast", "durable"]} 
      />

      <Product 
        title="laptop" 
        price={40000} 
        features={["portable", "powerful", "lightweight"]} 
      />

      <Product 
        title="soap" 
        price={34}
        features={["smooth", "fresh smell"]} 
      />
    </>
  );
}
