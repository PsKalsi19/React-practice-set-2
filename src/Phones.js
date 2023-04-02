export default function Phones({ products }) {
  return (
    <div className="phones">
      <h3>5) Phones Details</h3>
      <ul>
        {products
          .filter(({ name }) => name === "mobile")
          .map(({ name, description, price }) => (
            <li key={name + price}>
              Name:{name}, Description: {description}, Price: {price}
            </li>
          ))}
      </ul>
      <hr />
    </div>
  );
}
