export default function Todo({ todoItems }) {
  return (
    <div className="todo">
      <h3> 10) Todo List </h3>
      {todoItems.map((ele) => (
        <div
          key={ele.id}
          style={{
            color: ele.isCompleted ? "#22c55e" : "#f43f5e"
          }}
        >
          <h2>{ele.title}</h2>
          <p>{ele.description}</p>
        </div>
      ))}
    </div>
  );
}
