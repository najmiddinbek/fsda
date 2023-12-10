// ExampleModal.js

import React from "react";

const ExampleModal = ({ closeModal, data }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>
                    &times;
                </span>
                <p>{data.newIsm}</p>
                {/* Add other details you want to display */}
            </div>
        </div>
    );
};

export default ExampleModal;
