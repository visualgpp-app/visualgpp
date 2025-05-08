const { app, BrowserWindow, Menu } = require("electron");
const { is } = require("@electron-toolkit/utils");
const { join } = require('path');

const template = [{
  label: ''
}];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    icon: join(__dirname, 'src', 'icons', 'png', '16x16.png'),
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    resizable: false,
    minimizable: false,
    center: true,
    darkTheme: true,
    show: false,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#dedede',
      symbolColor: '#000000',
      height: 35
    },
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      ...(is.dev ? {} : { devTools: false }),
    }
  });

  mainWindow.loadFile(join(__dirname, 'src', 'index.html'));
  mainWindow.maximize();
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  if (is.dev) {
    mainWindow.webContents.openDevTools();
  };

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
});