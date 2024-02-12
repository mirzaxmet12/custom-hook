import { useState, useEffect } from 'react'


export function UserKeypress(key: string): boolean {

    const [keypress, setKeypress] = useState<boolean>(false)
    useEffect(() => {
        const handleKeypress = (e: KeyboardEvent) => {
            if (key === e.key) setKeypress(true)
            else setKeypress(false)
        }
        window.addEventListener('keypress', handleKeypress);

        return () => {
            window.removeEventListener('keypress', () => handleKeypress)
        }
    }, [])
    return keypress
}

