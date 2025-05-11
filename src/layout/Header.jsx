import React from "react";
import homeLogo from "../assets/home_logo.png";

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="header">
      <h1>나만의 포트폴리오</h1>
      <nav>
        <button onClick={() => setCurrentPage("home")}>
          <img src={homeLogo} alt="홈" style={{ width: "90px", height: "70px" }} />
        </button>
        <button onClick={() => setCurrentPage("about")}>소개</button>
        <button onClick={() => setCurrentPage("projects")}>프로젝트</button>
        <button onClick={() => setCurrentPage("contact")}>연락처</button>
        <button onClick={() => setCurrentPage("calculator")}>계산기</button>
      </nav>
    </header>
  );
};

export default Header;
