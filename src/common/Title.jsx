import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <h1
        style={{
          marginBottom: "30px",
          fontSize: "x-larger",
          marginTop: "30px",
          fontWeight: "bold",
          color: "#212121",
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
