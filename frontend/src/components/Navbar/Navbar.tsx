import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [active, setActive] = useState("");

    useEffect(() => {
        const ids = [
            "home",
            "work",
            "education",
            "projects",
            "tech",
            "cv",
            "contact",
        ];

        const handleScroll = () => {
            const triggerPoint = window.innerHeight * 0.6;
            let closestSection = "";
            let closestDistance = Infinity;

            ids.forEach((id) => {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const sectionTop = rect.top;
                    const sectionBottom = rect.bottom;

                    if (sectionBottom > 0 && sectionTop < window.innerHeight) {
                        const distance = Math.abs(sectionTop - triggerPoint);
                        if (distance < closestDistance) {
                            closestDistance = distance;
                            closestSection = id;
                        }
                    }
                }
            });

            if (closestSection) {
                setActive(closestSection);
            }
        };

        handleScroll();

        let ticking = false;
        const scrollListener = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", scrollListener);
        return () => window.removeEventListener("scroll", scrollListener);
    }, []);


    const linkClass = (id: string) => `navbar-link ${active === id ? "active" : ""}`;

    return (
        <nav>
            <div className="navbar-container">
                <div className="navbar-content">
                    <a href="#home" className={linkClass("home")} data-section="home" data-label="HOME">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 42 42">
                            <path fill="none" stroke="#fff" d="M2.68 15.726c-.1.039-.16.09-.18.149l.18-.149zm-.18.149v20.627c0 2.509.49 2.998 3 2.998h7c2.51 0 3-.461 3-3v-8h9v8.031c0 2.51.51 2.979 3 2.969c.04.031 7 0 7 0c2.529 0 3-.526 3-2.997V16.495c0-.08-.09-.15-.27-.23L20 1.5L2.68 15.726l-.18.149z" />
                        </svg>
                    </a>

                    <div className="navbar-link-separator" />

                    <a href="#work" className={linkClass("work")} data-section="work" data-label="WORK">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="none" stroke="#fff" d="M4 21q-.825 0-1.413-.588T2 19V8q0-.825.588-1.413T4 6h4V4q0-.825.588-1.413T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.588 1.413T20 21H4Zm6-15h4V4h-4v2Z" />
                        </svg>
                    </a>

                    <div className="navbar-link-separator" />

                    <a href="#education" className={linkClass("education")} data-section="education" data-label="EDUCATION">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                            <path fill="none" stroke="#fff" strokeWidth="10" d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.89 15.89 0 0 0-5.46-12A143 143 0 0 0 202.24 74Zm279.68-20.7A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.31 143.31 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61Z" />
                        </svg>
                    </a>

                    <div className="navbar-link-separator" />

                    <a href="#projects" className={linkClass("projects")} data-section="projects" data-label="PROJECTS">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 432 384">
                            <path fill="none" stroke="#fff" strokeWidth="10" d="m171 21l42 43h171q18 0 30.5 12.5T427 107v213q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21h128z" />
                        </svg>
                    </a>

                    <div className="navbar-link-separator" />

                    <a href="#tech" className={linkClass("tech")} data-section="tech" data-label="TECHNOLOGIES">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 769">
                            <path fill="none" stroke="#fff" strokeWidth="10" d="M1006 428L744 751q-18 18-43.5 18T657 751t-18-43t18-43l227-280l-227-280q-18-18-18-43.5T657 18t43.5-18T744 18l262 323q18 18 18 43.5t-18 43.5zM367 751q-18 18-43.5 18T280 751L18 428Q0 410 0 384.5T18 341L280 18q18-18 43.5-18T367 18t18 43.5t-18 43.5L140 385l227 280q18 18 18 43t-18 43z" />
                        </svg>
                    </a>

                    <div className="navbar-link-separator" />

                    <a href="#cv" className={linkClass("cv")} data-section="cv" data-label="CV">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                            <path fill="none" stroke="#fff" strokeWidth="5" d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51Zm-75.28 92.31a8 8 0 0 1-7.87 6.61a8.27 8.27 0 0 1-1.4-.12l-41.5-7.33A8 8 0 0 1 87.52 115l41.48 7.29a8 8 0 0 1 6.5 9.27Zm47-24.18a8 8 0 0 1-7.86 6.61a7.55 7.55 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1 2.79-15.76l83 14.66a8 8 0 0 1 6.51 9.27Zm5.55-31.52a8 8 0 0 1-7.87 6.61a8.36 8.36 0 0 1-1.4-.12l-83-14.66a8 8 0 1 1 2.78-15.75l83 14.65a8 8 0 0 1 6.52 9.27Z" />
                        </svg>
                    </a>

                    <div className="navbar-link-separator" />

                    <a href="#contact" className={linkClass("contact")} data-section="contact" data-label="CONTACT">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <g fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5 3a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3a1 1 0 0 1 1 1v.97c0 1.659 1.904 2.596 3.22 1.584l4.35-3.347a1 1 0 0 1 .61-.207H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H5z" stroke="#fff" />
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    );
}