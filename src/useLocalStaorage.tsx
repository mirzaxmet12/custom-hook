import React, { useEffect, useState } from 'react'


export function useLocalStaorage( storageKey:string, initialValue:any ): [any, React.Dispatch<React.SetStateAction<any>>]  {

    const storage = localStorage.getItem(storageKey)
    const initial = (storage) ? JSON.parse(storage) : initialValue
    const [value, setValue] = useState(initial)
    
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value))
    },[storageKey,value])

    return [value,setValue]
}

