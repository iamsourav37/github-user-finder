import React from "react";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark fixed-bottom text-light">
      <div className="container text-center p-3">
        <span className="">
          Github search firebse react project <br />
          This app is created by Sourav. <br />
          Linkedin :{" "}
          <a
            href="https://www.linkedin.com/in/iamsourav37/"
            target="_blank"
            rel="noreferrer"
            className="text-warning"
          >
            iamSourav37
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
