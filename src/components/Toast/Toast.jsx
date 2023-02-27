import Toast from "react-bootstrap/Toast";

function ContextualExample() {
  return (
    <>
      {["Success"].map((variant, idx) => (
        <Toast
          className="d-inline-block m-1"
          bg={variant.toLowerCase()}
          key={idx}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />

            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body className={variant === "Dark" && "text-white"}>
            Post Is Sucessful
          </Toast.Body>
        </Toast>
      ))}
    </>
  );
}

export default ContextualExample;
