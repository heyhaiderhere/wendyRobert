import React from "react";

const List = ({ element }) => {
  return (
    <div>
      <h4 style={{ fontSize: 30 }}>{element?.subHeading}</h4>
      <ul
        style={{
          marginLeft: "2rem",
        }}
      >
        {element?.list?.map((li, i) => {
          return (
            <li
              key={i}
              style={{
                listStyle: "inside",
                color: "#666",
              }}
            >
              {li}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
