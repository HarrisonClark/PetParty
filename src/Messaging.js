import React, {useEffect} from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

export default function Messaging() {
  useEffect(() => {
    addResponseMessage('Woof woof!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage("Woof!");
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="PetFiesta Support"
        subtitle="Our staff are always available and helpful!"
      />
    </div>
  );
}