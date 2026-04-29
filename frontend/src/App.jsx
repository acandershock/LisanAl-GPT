// App.jsx

import Header     from './components/Header'
import ChatWindow from './components/ChatWindow'
import ChatInput  from './components/ChatInput'

export default function App() {
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
      <ChatWindow />
      <ChatInput />
    </div>
  )
}
