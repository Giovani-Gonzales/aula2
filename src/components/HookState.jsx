import React from 'react'

import { useState, useEffect } from 'react'

const HookState = () => {

  const [contador, setContador] = useState(0)
  return (
    <>
      <button onClick={() => setContador(contador + 1)}>Contador: {contador}</button>
    </>
  )
}

export default HookState
