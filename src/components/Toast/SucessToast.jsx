import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
const SucessToast = () => {
  const [position, setPosition] = useState("top-start");
  return (
    <>
      <div
        aria-live="polite"
        aria-atomic="true"
        className="bg-dark position-relative"
        style={{ minHeight: "240px" }}
      >
        <ToastContainer position="top-end" className="p-3">
          {["Success"].map((variant, idx) => (
            <>
              <Toast>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Todaysmusic</strong>
                  <small className="text-muted">just now</small>
                </Toast.Header>
                <Toast.Body>Sucess</Toast.Body>
              </Toast>
              <Toast>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Todaysmusic</strong>
                  <small className="text-muted">2 seconds ago</small>
                </Toast.Header>
                <Toast.Body>Your request is Sucessful</Toast.Body>
              </Toast>
            </>
          ))}
        </ToastContainer>
      </div>
    </>
  );
};

export default SucessToast;
