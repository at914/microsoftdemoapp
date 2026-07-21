import React from "react";
import '../style/ChatApp.css'

const ChatApp = (props) => {
  return (
    <div className="chat-app">
      {/* Sidebar */}
      {/* <aside className="sidebar">
        <div className="logo">ChatApp</div>

        <button className="new-chat-btn">
          + New Chat
        </button>

        <div className="chat-history">
          <div className="chat-item active">
            Frontend Architecture Discussion
          </div>

          <div className="chat-item">
            React Component Design
          </div>

          <div className="chat-item">
            Solution Architecture Review
          </div>

          <div className="chat-item">
            API Integration Strategy
          </div>
        </div>
      </aside> */}

      {/* Main Content */}
      <main className="chat-container">
        {/* Header */}
        <header className="chat-header">
          <h2>Microsoft Teams App Integration</h2>
          <h2>
            Hello, {props.userName}
          </h2>
        </header>

        {/* Messages */}
        <section className="messages-section">
          {/* <div className="message bot">
            <div className="avatar">AI</div>
            <div className="message-content">
              Hello! How can I assist you today?
            </div>
          </div>

          <div className="message user">
            <div className="message-content">
              Create a responsive chat application UI.
            </div>
          </div>

          <div className="message bot">
            <div className="avatar">AI</div>
            <div className="message-content">
              Sure! Here's a modern responsive chat layout.
            </div>
          </div> */}
        </section>

        {/* Input Area */}
        <footer className="input-section">
          <input
            type="text"
            placeholder="Type your message..."
          />
          <button className="sendData">Send</button>
        </footer>
      </main>
    </div>
  );
};

export default ChatApp;
