import "../styles/main.css";

import github from "../images/github.png";

export const Footer = () => {
  return (
    <div className="footer-container">
      <a href="https://github.com/tvu20" target="_blank" rel="noreferrer">
        <img src={github} alt="github" style={{ width: "30px" }} />
      </a>
      <p>Giao Vu Dinh | Independent Work Project for Spring 2023</p>
    </div>
  );
};
