/**
  Copyright 2016
  Written by Jardón Fonseca Bruno
  http://bjardon.github.io
**/
const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
let win;

function createWindow() {
  win = new BrowserWindow({width: 800, height: 600});
  win.setFullScreen(true);
  //win.webContents.openDevTools();
  win.loadURL(`file://${__dirname}/app/html/index.html`);
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});