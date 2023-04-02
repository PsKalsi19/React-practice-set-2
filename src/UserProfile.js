export default function UserProfile({ name, age, email }) {
  return (
    <div className="userDetails">
      <h3>3) User Details</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <hr />
    </div>
  );
}
