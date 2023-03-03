import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./Layout.css";
import Container from "react-bootstrap/Container";
import { TextField } from "@mui/material";
const LayoutSideBar = ({ children }) => {
  const [sidebarWidth, setSidebarWidth] = useState(undefined);
  const [sidebarTop, setSidebarTop] = useState(undefined);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  // useEffect(() => {
  //   const sidebarEl = document
  //     .querySelector(".sidebar")
  //     .getBoundingClientRect();
  //   setSidebarWidth(sidebarEl.width);
  //   setSidebarTop(sidebarEl.top);
  // }, []);

  // useEffect(() => {
  //   if (!sidebarTop) return;

  //   window.addEventListener("scroll", isSticky);
  //   return () => {
  //     window.removeEventListener("scroll", isSticky);
  //   };
  // }, [sidebarTop]);

  // const isSticky = (e) => {
  //   const sidebarEl = document.querySelector(".sibebar");
  //   const scrollTop = window.scrollY;
  //   if (scrollTop >= sidebarTop - 10) {
  //     sidebarEl.classList.add("is-sticky");
  //   } else {
  //     sidebarEl.classList.remove("is-sticky");
  //   }
  // };
  return (
    <>
      <main className=" layout-main-div">
        <div className="content lay-min-div">{children}</div>
        <div
          className="side-div-layout"
          // className="side-div-layout"
          // style={{ width: sidebarWidth }}
        >
          <div
          // className={`sidebar ${sticky ? "sticky" : ""}`}
          >
            <Sidebar />
          </div>
        </div>
      </main>
    </>
  );
};

export default LayoutSideBar;
