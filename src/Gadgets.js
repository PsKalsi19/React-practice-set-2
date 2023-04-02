export default function Gadgets({ gadgets }) {
  return (
    <div className="gadgets">
      <h3>4) Gadget Details</h3>
      <ol>
        {gadgets.map(({ name, description, price, id }) => (
          <li key={id}>
            <p
              style={{
                padding: "2rem",
                border: price > 5000 ? "1px solid #000" : "none"
              }}
            >
              Name: {name}, Description: {description}, Price: {price}
            </p>
          </li>
        ))}
      </ol>

      <hr />
    </div>
  );
}
