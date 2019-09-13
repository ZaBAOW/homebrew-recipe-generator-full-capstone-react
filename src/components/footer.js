import React from 'react';

export default function Footer(props) {
    return (
        <footer className="section section-primary color-bgsecondary-2-2">
          <div className="container">
            <ul>
                <li className="contact-info">
                    <a href="mailto:amkadesky@aol.com?subject=Hello" target="_blank" rel="noopenper" aria-label="Email Andrew">
                    <i aria-hidden='false' className="fas fa-envelope" title="Email"></i>
                </a>
                </li>
                <li className="contact-info">
                    <a href="https://github.com/ZaBAOW" target="_blank" rel="noopenper" aria-label="View GitHub profile">
                    <i aria-hidden='false' className="fab fa-github" title="GitHub"></i>
                </a>
                </li>
                <li className="contact-info">
                    <a href="https://www.linkedin.com/in/andrew-kadesky-566aa2127/" target="_blank" rel="noopenper" aria-label="View LinkedIn profile">
                    <i aria-hidden='false' className="fab fa-linkedin" title="LinkedIn"></i>
                </a>
                </li>
            </ul>
          </div>
        </footer>
    )
}