import React from "react";

const Notification = () => {
  const [showNotificationPrompt, setShowNotificationPrompt] = useState(false);

  const handleAllowNotificationsClick = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          // Notification permission granted
          setShowNotificationPrompt(false);
        }
      });
    }
  };

  const handleDenyNotificationsClick = () => {
    setShowNotificationPrompt(false);
  };
  return (
    <div>
      <div>
        {showNotificationPrompt && (
          <div className="notification-prompt">
            <p>Do you like to turn on notifications?</p>
            <button onClick={handleAllowNotificationsClick}>Allow</button>
            <button onClick={handleDenyNotificationsClick}>Deny</button>
          </div>
        )}

        {/* Rest of your component content */}
      </div>
    </div>
  );
};

export default Notification;
