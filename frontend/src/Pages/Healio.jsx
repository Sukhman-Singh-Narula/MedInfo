import React, { useEffect } from 'react';

function Healio() {
    useEffect(() => {
        // Set global configuration for the chatbot
        window.embeddedChatbotConfig = {
            chatbotId: "ynEetPmGPEnQPHmDt67lD",
            domain: "www.chatbase.co"
        };

        // Create and append the script element
        const script = document.createElement('script');
        script.src = "https://www.chatbase.co/embed.min.js";
        script.defer = true;
        document.body.appendChild(script);

        // Clean up the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []); // This ensures the effect runs only once when the component mounts

    return (
        <div className='TextBox'>
            <iframe className='iframe' 
                src="https://www.chatbase.co/chatbot-iframe/ynEetPmGPEnQPHmDt67lD"
                title="Chatbot"
                width="100%"
                style={{ height: '100%', minHeight: '700px' , marginTop: "80px"}}
                frameBorder="0"
            ></iframe>
        </div>
    );
}

export default Healio;