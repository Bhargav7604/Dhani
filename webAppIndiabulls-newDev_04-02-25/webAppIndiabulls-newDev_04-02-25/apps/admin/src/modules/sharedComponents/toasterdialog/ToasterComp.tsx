import React, { useEffect, useState } from "react";

import { ToasterProps } from "./ToasterUtils";

const ToasterComp: React.FC<ToasterProps> = ({
  status,
  message,
  duration = 2000,
  onClose,
}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getStyles = () => {
    if (status === true) {
      return { backgroundColor: "#55B938", icon: "✔️" };
    } else if (status === false) {
      return { backgroundColor: "#D65745", icon: "❌" };
    } else {
      return { backgroundColor: "#333", icon: "ℹ️" };
    }
  };

  if (!show) return null;

  const { backgroundColor, icon } = getStyles();

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        backgroundColor,
        color: "#fff",
        borderRadius: "6px",
        padding: "18px 28px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        zIndex: 9999,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        minWidth: "280px",
      }}
    >
      <div
        style={{
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "16px", color: backgroundColor }}>{icon}</span>
      </div>
      <div>{message}</div>
    </div>
  );
};

export default ToasterComp;
