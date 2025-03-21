import { ReactNode, useState } from 'react'
import CursorEffect from './CursorEffect'
import { FiMousePointer } from 'react-icons/fi'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [cursorEnabled, setCursorEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-theme">
      <CursorEffect enabled={cursorEnabled} />
      <button
        onClick={() => setCursorEnabled(!cursorEnabled)}
        className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-background-light dark:bg-background-dark text-text hover:text-neon dark:text-text-light dark:hover:text-neon transition-colors duration-300"
        title={cursorEnabled ? "Disable cursor effect" : "Enable cursor effect"}
      >
        <FiMousePointer className={`w-5 h-5 ${cursorEnabled ? 'text-neon' : ''}`} />
      </button>
      {children}
    </div>
  )
}

export default Layout 