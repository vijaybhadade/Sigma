import './Product.css';

export default function Product({ title, price, features }) {
  
//   const list = features?.map((feature, index) => (
//     <li key={index}>{feature}</li>
//   )); 
 let isDiscount= price > 30000;
 let style={backgroundColor: isDiscount ? "pink" : null};
  return (
    <div className="Product" style={style}>
      <h3>Title of Product is {title}</h3>
      <h5>Price of product is {price}</h5>
      {isDiscount ? <p>   Discount of  5% </p> :<a href="">Get discount</a>}
     {/* {features && (<ul>{list} </ul> )} */}
    </div>
  );
}
