import React, { useEffect, useState } from "react"
import Container from "./Components/Container/Container"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Context from "./Context"

function App() {

  const [menu, setMenu] = useState({
    todo: true,
    done: false,
    info: false
    })

  const [doneTask, setDoneTask] = useState([])

  useEffect(() => {
    const raw = localStorage.getItem('doneTask') || []
    setDoneTask(JSON.parse(raw))
  }, [])
  
  useEffect(() => {
    localStorage.setItem('doneTask', JSON.stringify(doneTask))
  }, [doneTask])

  const doneValue = {doneTask, setDoneTask}

  return (
    <Context.Provider value={{
      menu, setMenu, doneValue
    }}>
        <Header/>
        <Container/>
        <Footer/>
    </Context.Provider>
  )
}

export default App
