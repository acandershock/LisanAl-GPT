// App.jsx

import { useState } from 'react'
import Header     from './components/Header'
import ChatWindow from './components/ChatWindow'
import ChatInput  from './components/ChatInput'

export default function App() {

  // messages: the array of chat messages displayed on screen
  // setMessages: the only way to update that array
  const [messages, setMessages] = useState([])

  // isThinking: true whil we're waiting on the backend
  const [isThinking, setIsThinking] = useState(false)

  // Runs when user submits a message
  function handleSend(text) {
    // Build new user message object
    const userMessage = {
      id: Date.now(),
      role: 'user',
      text,
    }

    // Add message object to messages array
    setMessages(prev => [...prev, userMessage])

    // Simulate bot reply for now.
    setIsThinking(true)
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        role: 'bot',
        text: 'The spice must flow. (Backend not connected yet)',
      }
      setMessages(prev => [...prev, botMessage])
      setIsThinking(false)
    }, 1000)
  }

  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      maxWidth: '820px',
      margin: '0 auto',
      width: '100%',
    }}>
      <Header />
      <ChatWindow messages={messages} isThinking={isThinking}/>
      <ChatInput onSend={handleSend} isThinking={isThinking}/>
    </div>
  )
}
