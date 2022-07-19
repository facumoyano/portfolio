import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";

// import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <p>
                    {"</>"}
                    <span> FM</span>{" "}
                </p>
            </div>
            <ul className="app__navbar-links">
                {[
                    "Inicio",
                    "Sobremí",
                    "Proyectos",
                    "Formación",
                    "Contacto",
                ].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: "easeOut" }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {["home", "about", "work", "skills", "contact"].map(
                                (item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item}`}
                                            onClick={() => setToggle(false)}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                            <li style={{ bottom: 0, position: "absolute" }}>
                                <a
                                    href="https://www.linkedin.com/in/facundo-moyano-/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="redes-nav"
                                >
                                    <BsLinkedin />
                                </a>
                                <a
                                    href="https://github.com/facumoyano"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="redes-nav"
                                >
                                    <BsGithub />
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
