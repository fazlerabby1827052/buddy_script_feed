import React, { useState } from "react";
import "./index.css"; // External CSS for styling

const Modal = ({ isOpen, onClose, onPost }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onPost(inputValue);
      setInputValue(""); // Clear input after posting
      onClose(); // Close modal after posting
    } else {
      alert("Please enter some text before posting.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modal-content">
          <h2>Enter Your Post</h2>
          <textarea
            value={inputValue}
            onChange={handleInputChange}
            placeholder="What's on your mind?"
            rows="5"
            className="modal-input"
          />
          <div className="modal-actions">
            <button className="post-btn" onClick={handlePost}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
