import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Footer(props) {
    return (
        <footer className="section section-primary color-bgsecondary-2-2">
          <div className="container">
            <ul>
                <li class="contact-info">
                    <a href="mailto:amkadesky@aol.com?subject=Hello" target="_blank" aria-label="Email Andrew">
                    <i aria-hidden="" class="fas fa-envelope" title="Email"></i>
                </a>
                </li>
                <li class="contact-info">
                    <a href="https://github.com/ZaBAOW" target="_blank" aria-label="View GitHub profile">
                    <i aria-hidden="" class="fab fa-github" title="GitHub"></i>
                </a>
                </li>
                <li class="contact-info">
                    <a href="https://www.linkedin.com/in/andrew-kadesky-566aa2127/" target="_blank" aria-label="View LinkedIn profile">
                    <i aria-hidden="" class="fab fa-linkedin" title="LinkedIn"></i>
                </a>
                </li>
            </ul>
          </div>
        </footer>
    )
}