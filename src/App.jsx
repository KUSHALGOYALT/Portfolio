import React, { useState } from 'react';
import './App.css';
import Project from './Project';
import Contact from './Contact';
import Modal from './Modal';

function App() {
    // State for modal visibility
    const [modalOpen, setModalOpen] = useState(false);

    // State for modal content
    const [modalContent, setModalContent] = useState({ title: '', description: '' });

    // List of project data
    const projects = [
        {
            title: 'LearnSphere',
            description:
                'An AI-powered learning assistant that personalizes your study plan. Full-stack web app using React, Node, and ML.',
        },
        {
            title: 'Export Management System',
            description:
                'A streamlined platform to manage and track export operations efficiently. Built with Spring Boot and modern frontend tech.',
        },
        // Add more projects here if you want
    ];

    // Open modal with given project data
    const handleProjectClick = (project) => {
        setModalContent(project);
        setModalOpen(true);
    };

    // Close modal
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="App">
            {/* Header */}
            <header className="header">
                <h1>My Interactive Portfolio</h1>
                <nav>
                    <ul className="nav-list">
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* About Section */}
            <section id="about" className="section">
                <h2>About Me</h2>
                <p>
                    Hello! I'm Kushal — a code ninja by day and bug whisperer by night.
                    When I’m not debugging APIs or wrangling ML models, I’m probably automating my coffee breaks.
                    I build scalable apps, solve problems, and occasionally type <code>sudo</code> commands like a boss.
                </p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section">
                <h2>Projects</h2>
                {projects.map((proj) => (
                    <Project
                        key={proj.title}
                        title={proj.title}
                        description={proj.description}
                        onClick={() => handleProjectClick(proj)}
                    />
                ))}
            </section>

            {/* Contact Section */}
            <Contact />

            {/* Project Modal */}
            <Modal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                title={modalContent.title}
                description={modalContent.description}
            />
        </div>
    );
}

export default App;
