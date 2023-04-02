export default function ProductDetails({ name, price }) {
  return (
    <div className="productDetails">
      <h3>2) Product Details</h3>
      <p
        style={{
          color: "blue",
          fontWeight: "bold"
        }}
      >
        Name: {name}
      </p>
      <p
        style={{
          color: "green",
          fontStyle: "italic"
        }}
      >
        Price: {price}
      </p>
      <hr />
    </div>
  );
}
