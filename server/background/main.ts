// main.js

// Modules to control application life and create native browser window
const path = require('path')
const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    nodeIntegration: false,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    }
  })

  // and load the index.html of the app.
  mainWindow.loadURL('http://localhost:3001/')
  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Algunas APIs pueden solamente ser usadas despues de que este evento ocurra.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
console.log("asd")
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. Tu también puedes ponerlos en archivos separados y requerirlos aquí.
