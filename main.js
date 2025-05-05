const { app, BrowserWindow } = require('electron')
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
  
  win.loadFile('index.html')
}
// carregar o arquivo index.html na janela criada
app.whenReady().then(() => {
  createWindow()

// Quando o aplicativo estiver pronto, chama a funçao  createwindow para criar a janela principal

// Executa a funçao createwwindow para criar a janela principal