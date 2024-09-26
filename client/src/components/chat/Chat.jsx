import React, { useMemo, useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./chat.css";
function Chat() {
  const socket = useMemo(() => io("http://localhost:3000"), []);
  const [chat, setChat] = useState(true);
  const [sendMessage, setSendMessage] = useState(""); // Message to send
  const [messages, setMessages] = useState([]); // Store both sent and received messages
  const [socketId, setSocketId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageData = { message: sendMessage, sender: "me" }; // Mark message as "me"
    setMessages((prevMessages) => [...prevMessages, messageData]); // Add the sent message to the state
    socket.emit("message", { message: sendMessage }); // Emit message to server
    setSendMessage(""); // Clear input field after sending
  };

  // Listen for events from the server
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected client", socket.id);
      setSocketId(socket.id);
    });

    // Update active users list when a new user connects
    // socket.on("User_Connected", (activeUserList) => {
    //   setActiveUsers(activeUserList); // Update the entire active user list from the server
    // });

    // Remove disconnected users from the active list
    socket.on("User_Disconnected", (e) => {
      console.log("userdisconnected ", e);

      // setActiveUsers(activeUserList); // Update the list upon user disconnection
    });

    // Listen for incoming messages from other users
    socket.on("receive_message", (data) => {
      const messageData = { message: data.message, sender: data.sender }; // Mark message as received with sender
      setMessages((prevMessages) => [...prevMessages, messageData]); // Add received message to state
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              John Doe
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="space-y-3">
              {/* both sent and received messages */}
              {messages.map((messageData, index) => (
                <div
                  key={index}
                  className={`flex ${
                    messageData.sender === "me"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`${
                      messageData.sender === "me"
                        ? "bg-green-300"
                        : "bg-white border border-gray-300"
                    } text-black p-2 rounded-xl max-w-xs break-words`}
                  >
                    <p>{messageData.message}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own" id="sendMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div> */}
            {/*  <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
          </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>     */}
          </div>
          <div>
            <form
              className="bottom"
              action="/"
              onSubmit={handleSubmit}
              method="post"
            >
              <input
                className="textarea"
                type="text"
                value={sendMessage}
                onChange={(e) => setSendMessage(e.target.value)}
              />
              <input type="submit" className="button" placeholder="Sent" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default Chat;
