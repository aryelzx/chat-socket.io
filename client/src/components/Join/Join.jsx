import { useRef } from "react"
import io from 'socket.io-client'

// eslint-disable-next-line react/prop-types
export default function Join({setChatVisibility, setSocket}) {
    const usernameRef = useRef()

    const handleSubmit = async () => {
        const username = usernameRef.current.value

        if (!username.trim()) return
        
        const socket = await io.connect('http://localhost:3001')
        socket.emit('set_username', username)
        setSocket(socket)
        setChatVisibility(true)
    
    }
  return (
    <div>
        <h1>Entrar</h1>
        <input type="text" ref={ usernameRef } placeholder="Nome de usuário" />
        <button onClick={() => handleSubmit()}>Entrar</button>
    </div>
  )
}
