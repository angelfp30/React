import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clickCount, setClickCount] = useState(0)
  const [clickerStyle, setClickerStyle] = useState({})


  // pointer move
  useEffect(() => {
    console.log('effect ', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup:
    // -> cuando el componente se desmonta
    // -> cuando cambian las dependencias, antes de ejecutar
    //    el efecto de nuevo
    return () => { // cleanup method
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente

  // change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  
  //click counter
  const handleClick = () => {
    setClickCount(clickCount + 1);
    console.log(clickCount);

    setClickerStyle({
      ...clickerStyle,
      left: `${Math.floor(Math.random() * 1301)}px`,
      top: `${Math.floor(Math.random() * 520)}px`
    })
  }

  useEffect(() => {
    
    const newClickerStyle = {
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      border: '1px solid #fff',
      borderRadius: '20%',
      opacity: 0.8,
      color: '#fff',
      ...clickerStyle
    }
    setClickerStyle(newClickerStyle)

  }, [clickerStyle])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -12,
        top: -5,
        width: 30,
        height: 30,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>

      <div className='clicker' onClick={
          enabled ? handleClick : ''
        } 
        style={clickerStyle}>
        Click me
      </div>

      <div className='score'>
        Score: {clickCount}
      </div>
    </>
  )
}

function App () {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App