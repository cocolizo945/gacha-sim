import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import Navbar from './components/navbar.jsx'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>

      <Navbar/>


      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">holi crayoli</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>

    </>
  )
}

export default App
