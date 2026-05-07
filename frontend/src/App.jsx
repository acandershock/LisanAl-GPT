// App.jsx

import { useState } from 'react'
import ArrakisBackground from './components/ArrakisBackground'
import Header     from './components/Header'
import ChatWindow from './components/ChatWindow'
import ChatInput  from './components/ChatInput'

const REACT_APP_API_URL="https://decency-reference-mustang.ngrok-free.dev"; // change this every time

export default function App() {

  // messages: the array of chat messages displayed on screen
  // setMessages: the only way to update that array
  const [messages, setMessages] = useState([])

  // isThinking: true whil we're waiting on the backend
  const [isThinking, setIsThinking] = useState(false)

  // Runs when user submits a message
  async function handleSend(text) {
    const userMessage = {
      id: Date.now(),
      role: 'user',
      text,
    }
    setMessages(prev => [...prev, userMessage])
    setIsThinking(true)

    try {
      const response = await fetch(`${REACT_APP_API_URL}/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: text }),
      })

      const data = await response.json()

      const botMessage = {
        id: Date.now() + 1,
        role: 'bot',
        text: data.response,
      }
      setMessages(prev => [...prev, botMessage])

    } catch (error) {
      const errMessage = {
        id: Date.now() + 1,
        role: 'bot',
        text: 'Error reaching the backend. Is Colab running?',
      }
      setMessages(prev => [...prev, errMessage])

    } finally {
      setIsThinking(false)
  }
}

  return (
    <>
      <ArrakisBackground />

      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        maxWidth: '820px',
        margin: '0 auto',
        width: '100%',
      }}>
        <Header />
        <ChatWindow
          messages={messages}
          isThinking={isThinking}
          onStarter={handleSend}
        />
        <ChatInput onSend={handleSend} isThinking={isThinking}/>
      </div>
    </>
  )
}
