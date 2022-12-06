import React from "react";

const ChatForm = ({ handleSubmit, text, setText, setImg }) => {
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <input
                type="text"
                placeholder="Enter message"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
        <div>
            <button className="btn">Send</button>
        </div>
        </form>
    )
}
export default ChatForm;