import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { ExternalLink, Briefcase } from 'lucide-react';
import './Experience.css';

// Tech stack logos mapping
const techLogos: Record<string, string> = {
    'React': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    'Python': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    'AWS': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg',
    'TypeScript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    'JavaScript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    'Node.js': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
};

const experiences = [
    {
        year: '2023',
        company: "Cognizant",
        role: "Software Engineer",
        techStack: ['Python', 'React', 'AWS', 'TypeScript', 'Node.js'],
        points: [
            { text: "Developed and maintained robust APIs using Python to manage insurance portfolios, client policies, and policy creation processes, enhancing data retrieval efficiency by 30% and reducing error rates by 20%." },
            { text: "Modeled and implemented user-friendly front-end interfaces with React functional components for seamless policy management and portfolio tracking, which improved user interaction and satisfaction scores by 35%." },
            { text: "Built and optimized serverless backend solutions using AWS Lambda, integrating with AWS VPCs to ensure secure and scalable handling of policy data, which led to a 25% reduction in operational costs." },
            { text: "Architected and administered AWS infrastructure to support high-volume policy management and client interactions, achieving 99.9% system uptime and improving overall system reliability." },
            { text: "Collaborated closely with insurance specialists to implement new features and enhancements tailored to policy management needs, consistently delivering projects on time and increasing feature adoption by 40%." }
        ]
    },
    {
        year: '2022',
        company: "Cognizant",
        role: "Software Development Intern",
        techStack: ['React', 'JavaScript', 'Node.js'],
        points: [
            { text: "Designed customer profile using React, successfully improving user experience and streamlining the profile management process, resulting in 99 out of 100 users reporting a smoother experience." },
            { text: "Created and deployed corresponding APIs for profile updates, ensuring data integrity and reducing update processing time by 20%." },
            { text: "Resolved 20+ client-reported bugs, enhancing application reliability and user satisfaction." },
            { text: "Documented processes, tasks, and development workflows comprehensively, creating clear and accessible documentation on Confluence to support team collaboration and knowledge sharing." }
        ]
    }
];

function TechStack({ technologies }: { technologies: string[] }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="tech-stack"
        >
            {technologies.map((tech, index) => (
                <motion.div
                    key={tech}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="tech-item"
                >
                    <img src={techLogos[tech]} alt={tech} />
                    <div className="tech-tooltip">{tech}</div>
                </motion.div>
            ))}
        </motion.div>
    );
}

function TimelineNode({ year, active }: { year: string; active: boolean }) {
    return (
        <motion.div
            className="timeline-node"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className={`node ${active ? 'active' : ''}`}
                whileHover={{ scale: 1.2 }}
            >
                <span>{year}</span>
            </motion.div>
            <div className="node-line" />
        </motion.div>
    );
}

function ExperienceCard({ company, role, year, points, techStack }: {
    company: string;
    role: string;
    year: string;
    points: Array<{ text: string }>;
    techStack: string[];
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="experience-card"
        >
            <div className="card-gradient" />
            <div className="card-content">
                <div className="card-header">
                    <motion.div
                        className="title-section"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="company-name">{company}</h3>
                        <p className="role-title">{role}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="year-badge"
                    >
                        <span>{year}</span>
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            className="link-icon"
                        >
                            <ExternalLink size={16} />
                        </motion.div>
                    </motion.div>
                </div>

                <TechStack technologies={techStack} />

                <div className="points-container">
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="point-item"
                        >
                            <motion.div
                                whileHover={{ scale: 1.5 }}
                                className="point-bullet"
                            />
                            <p>{point.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

const ExperienceSection = () => {
    const { scrollYProgress } = useScroll();
    const [activeIndex, setActiveIndex] = React.useState(0);

    React.useEffect(() => {
        return scrollYProgress.on("change", (latest) => {
            const index = Math.min(
                Math.floor(latest * experiences.length),
                experiences.length - 1
            );
            setActiveIndex(index);
        });
    }, [scrollYProgress]);

    return (
        <section id="experience" className="experience-section">
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="header-content"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Briefcase className="header-icon" />
                        <h2>Professional Experience</h2>
                    </motion.div>
                    <motion.div
                        className="header-underline"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ delay: 0.5 }}
                    />
                </motion.div>

                <div className="timeline-container">
                    <div className="timeline-bar">
                        <motion.div
                            className="timeline-progress"
                            style={{ scaleY: scrollYProgress }}
                        />
                    </div>

                    <div className="experiences-container">
                        {experiences.map((exp, index) => (
                            <div key={index} className="experience-item">
                                <TimelineNode year={exp.year} active={index <= activeIndex} />
                                <div className="experience-content">
                                    <ExperienceCard {...exp} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;