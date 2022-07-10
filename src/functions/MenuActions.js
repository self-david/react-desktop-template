import { ipcRenderer } from 'electron'

const newFile = () => alert('new file')
const save = () => alert('save file')
const saveAs = () => alert('save as...')
const search = () => alert('searching...')
const replace = () => alert('replace')
const problems = () => alert('show problems')
const documentation = () => alert('show documentation')
const reportProblems = () => alert('report problems')

const open = async () => {
  const element = window.document.createElement('input')
  element.setAttribute('type', 'file')
  element.addEventListener('change', () => {
    const fileName = element.files[0]
    alert(`file ${fileName.name} open`)
  })

  element.click()
}

const close = () => ipcRenderer.send('closeApp')

const lang = (language, context) => {
  const { setLang } = context
  ipcRenderer.send('saveConfig', 'lang', language)
  setLang(language)
}

const autoSave = (_, context) => {
  const { autoSave: autoSaveProp, setAutoSave } = context
  ipcRenderer.send('saveConfig', 'autoSave', !autoSaveProp)
  setAutoSave(!autoSaveProp)
}

const terminal = (_, context) => {
  const { terminal: terminalProp, setTerminal } = context
  ipcRenderer.send('saveConfig', 'terminal', !terminalProp)
  setTerminal(!terminalProp)
}

export default {
  newFile,
  save,
  saveAs,
  open,
  close,
  lang,
  autoSave,
  terminal,
  search,
  replace,
  problems,
  documentation,
  reportProblems,
}
