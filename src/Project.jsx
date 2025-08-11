import React from 'react';
import './Project.css';

function Project({ title, description, onClick }) {
    return (
        <div
            className="project-card"
            tabIndex="0"
            role="button"
            onClick={onClick}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick();
                }
            }}
        >
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Project;
