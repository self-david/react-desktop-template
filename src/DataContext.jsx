import React, { createContext, useState } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [menuActive, setMenuActive] = useState(-1)
  const [autoSave, setAutoSave] = useState(false)
  const [terminal, setTerminal] = useState(false)
  const [lang, setLang] = useState('es')

  return (
    <DataContext.Provider
      value={{
        lang,
        setLang,
        menuActive,
        setMenuActive,
        autoSave,
        setAutoSave,
        terminal,
        setTerminal,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
