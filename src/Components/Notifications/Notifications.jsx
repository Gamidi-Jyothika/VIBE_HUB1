import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Notifications.css"; // Optional: For styling

const Notifications = () => {
  const { user } = useSelector((store) => store);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Mock API Call - Replace with your API
    setNotifications([
      { id: 1, type: "like", message: "Alice liked your post." },
      { id: 2, type: "follow", message: "Bob started following you." },
    ]);
  }, []);

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      <div className="notifications-list">
        {notifications.length > 0 ? (
          notifications.map((notif) => (
            <div key={notif.id} className="notification">
              <p>{notif.message}</p>
            </div>
          ))
        ) : (
          <p>No notifications yet.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
