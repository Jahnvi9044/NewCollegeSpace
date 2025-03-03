import { useState } from 'react'
import {Button} from '@/components/ui/button'
import './App.css'
import { AuthPage } from './Pages/Authentication/AuthPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <AuthPage></AuthPage>
 
        
    </>
  )
}

export default App
