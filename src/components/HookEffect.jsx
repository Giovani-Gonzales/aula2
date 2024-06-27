import React from 'react'

import { useState, useEffect } from 'react'

const HookEffect = () => {

    const [contador, setContador] = useState(0)

    useEffect(() => {
        document.title = `Você Clicou ${contador} vezes`
    })

  return (
    <div>
        <button onClick={() => setContador(contador + 1)}>Atualizar Contador</button>
    </div>
  )
}

export default HookEffect
