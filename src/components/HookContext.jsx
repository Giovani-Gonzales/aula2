import React from 'react'

import { useState, useContext } from 'react'

import './HookContext.css'


const HookContext = () => {

    const temaContext = React.createContext('light')


    const [tema, setTema] = useState('light')
    const AlterarTema = () => {
        setTema(prevTema => (prevTema == 'light' ? 'dark' : 'light'))
    }

  return (
    <temaContext.Provider value={tema}>
        <div>
            <button onClick={AlterarTema} className={`botao ${tema}`}>Mudar Tema</button>
        </div>
    </temaContext.Provider>
  )
}

export default HookContext
