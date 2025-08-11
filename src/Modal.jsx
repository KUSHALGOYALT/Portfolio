import React from 'react';
import './Modal.css'
function Modal({isOpen, onClose , title, description}) {
    if (!isOpen) {
        return null;
    }
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={{onClose}}>
                    &times;
                </button>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );

}
export default Modal;
