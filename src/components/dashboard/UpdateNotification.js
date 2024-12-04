import React, { useState } from 'react';

function UpdateNotification() {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className="update-notification">
                <div className="alert alert-dismissible fade show" role="alert">
                    <div className="notification-message">
                        <span>Update:</span> We are working on a new dashboard for better user experience. Please stay with VCQRU.
                    </div>
                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={handleClose}
                    >
                        <i className="bx bxs-x-circle"></i>
                    </button>
                </div>
            </div>
        )
    );
}

export default UpdateNotification;
