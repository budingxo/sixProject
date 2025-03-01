// import react from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/index.tsx'

function App() {
  let element = useRoutes(routes)

  return (
    <>
      {element}
    </>
  )
}

export default App
