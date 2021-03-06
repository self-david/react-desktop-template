import { app, BrowserWindow, ipcMain } from 'electron'
import fs from 'fs'

let mainWindow = null
const isDev = process.env.ELECTRON_ENV === 'dev'

if (process.platform === 'win32') {
  app.commandLine.appendSwitch('high-dpi-support', 'true')
  app.commandLine.appendSwitch('force-device-scale-factor', '1')
  app.setAppUserModelId('My App')
}

// Render main window w/ configuration settings
const renderWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 640,
    minHeight: 480,
    center: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: isDev,
    },
  })

  // Depending on the environment the frontend will either load from the react server or the static html file
  if (isDev) {
    mainWindow.loadURL('http://localhost:3000/')
  } else {
    mainWindow.loadFile('./build/index.html')
  }

  // Detect if devtools was somehow opened outside development
  mainWindow.webContents.on('devtools-opened', () => {
    if (!isDev) {
      mainWindow.webContents.closeDevTools()
    }
  })

  ipcMain.on('closeApp', () => {
    app.quit()
  })
  ipcMain.on('minimizeApp', () => {
    mainWindow.minimize()
  })
  ipcMain.on('maximizeApp', () => {
    mainWindow.maximize()
  })
  ipcMain.on('restoreApp', () => {
    mainWindow.isMaximized() ? mainWindow.restore() : mainWindow.maximize()
  })
  ipcMain.on('saveConfig', (event, key, value) => {
    let data = {}
    if (fs.existsSync('./config.json')) {
      const rawdata = fs.readFileSync('./config.json')
      data = JSON.parse(rawdata)
    }

    data[key] = value
    fs.writeFileSync('./config.json', JSON.stringify(data, null, 2))
  })
}

app.on('ready', renderWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    renderWindow()
  }
})
