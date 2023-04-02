import { useState } from "react";

export default function Article({ title, content }) {
  const [displayContent, toggleContent] = new useState(false);
  return (
    <div className="article">
      <h3>6) Article</h3>
      <h1>{title}</h1>
      <button onClick={() => toggleContent(!displayContent)} className="btn">
        {!displayContent ? "Know More..." : "Hide content..."}
      </button>
      {displayContent ? <p>{content}</p> : null}
      {/* <ShowContent content={content} displayContent={displayContent} /> */}
      <hr />
    </div>
  );
}

// function ShowContent({ content, displayContent }) {
//   if (displayContent) {
//     return <p>{content}</p>;
//   }
// }
