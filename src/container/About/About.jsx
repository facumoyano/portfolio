import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./About.scss";

const About = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const skillsQuery = '*[_type == "skills"]';

        client.fetch(skillsQuery).then((data) => {
            setSkills(data);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">
                Sobre <span>Mí</span> <br />
            </h2>
            <div className="app__skills-container ">
                <motion.div
                    className="app__about-list"
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                >
                    <p>
                        Mi nombre es Facundo, actualmente me encuentro en
                        búsqueda empleo como desarollador.
                    </p>

                    <p>
                        Mi diferencial es la responsabilidad y las ganas de
                        crecer y de aportar a un proyecto esa energía, crecer y
                        capacitarme apostando al desarrollo personal y
                        profesional dentro de la organización que me permita
                        hacerlo.
                    </p>
                    <p>
                        Apuesto al trabajo en equipo y a la generación de
                        relaciones interpersonales como medio para el
                        cumplimiento de las metas organizacionales.
                    </p>
                    <p>
                        Mi mayor capital son mi personalidad, mi ganas de
                        crecer, de poder tomar experiencia y poner de mi parte
                        la actitud de aprendizaje continuamente para ser parte
                        de un objetivo personal y profesional.
                    </p>
                    <button type="button" className="p-text">
                        Descarga mi CV <HiOutlineArrowRight />
                    </button>
                </motion.div>
                <motion.div className="app__skills-list">
                    {skills?.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <div
                                className="app__flex"
                                style={{ backgroundColor: skill.bgColor }}
                            >
                                <img
                                    src={urlFor(skill.icon)}
                                    alt={skill.name}
                                />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(About, "about");
