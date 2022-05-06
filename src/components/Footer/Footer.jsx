import react from "react";
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
          <p className="col-md-4 mb-0 text-muted">© 2022 F*ck CSS, Inc.</p>
          <ul className="nav col-md-4">
            <li className="nav-item first-footer-item">
                <a href="/" className="nav-link px-2 text-muted">Tools</a>
            </li>
            <li className="nav-item">
                <a href="/" className="nav-link px-2 text-muted">About</a>
            </li>
          </ul>
        </footer>
    )
};

export default Footer;