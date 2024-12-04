import React, { useState } from 'react';

function Notification() {
  const [showNotification, setShowNotification] = useState(true);

  const handleClose = () => {
    setShowNotification(false);
  };

  return (
    <>
      {showNotification && (
        <div className="update-notification">
          <div className="alert alert-dismissible fade show" role="alert">
            <marquee
              onMouseOver={(e) => e.target.stop()}
              onMouseOut={(e) => e.target.start()}
            >
              We are launching a new API very soon
            </marquee>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose} 
              aria-label="Close"
            >
              <i className="bx bxs-x-circle"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Notification;
