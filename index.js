const electron = require("electron");
const { app } = electron;
const { BrowserWindow } = electron;
const { Menu } = electron;
let win;
const template = [
  {
    label: "File",
    submenu: [
      {
        label: "new game",
        click() {
          require("electron").shell.openExternal(
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          );
          win2 = win;
          createWindow();
          win2.close();
          win.loadFile("index.html");
        }
      },
      { type: "separator" },
      {
        label: "Exit",
        click() {
          app.quit();
        }
      }
    ]
  }
];
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600
  });
  win.loadFile("index.html");
  win.setResizable(false);
  win.webContents.openDevTools();
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
app.on("ready", createWindow);
