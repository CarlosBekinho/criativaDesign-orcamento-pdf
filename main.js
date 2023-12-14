const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },

    icon: path.join(__dirname, './src/images/logo.png')
  });

  win.loadFile('./index.html');
}

app.whenReady().then(createWindow);
