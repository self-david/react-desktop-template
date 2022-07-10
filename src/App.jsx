import React, { useContext, useEffect } from 'react'
import { DataContext } from './DataContext.jsx'

import Home from './views/Home.jsx'
import TopBar from './components/TopBar/TopBar.jsx'
import BuilderConfig from './builders/BuilderConfig'

import fs from 'fs'
import styled from 'styled-components'

const AppStyle = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

function App() {
  const { setLang, setAutoSave, setTerminal, setMenuActive } = useContext(DataContext)

  const isMenu = ({ target }) => target.parentNode.className !== 'menu' && setMenuActive(-1)

  useEffect(() => {
    let configInitial = BuilderConfig

    if (fs.existsSync('./config.json')) {
      // Cargar el archivo de configuración si es que este existe
      configInitial = { ...configInitial, ...JSON.parse(fs.readFileSync('./config.json', 'utf8')) }
    } else {
      // En caso contrario debe ser creado con las configuraciones iniciales
      fs.writeFileSync('./config.json', JSON.stringify(configInitial))
    }

    // establecer las configuraciones iniciales
    setLang(configInitial.lang)
    setAutoSave(configInitial.autoSave)
    setTerminal(configInitial.terminal)
  }, [])

  return (
    <AppStyle onClick={isMenu}>
      <TopBar />
      <Home />
    </AppStyle>
  )
}

export default App
