import './App.css'
import "./modules/Logo/Logo.tsx"
import Logo from "./modules/Logo/Logo.tsx"
import Contact from "./modules/Contact/Contact.tsx"
import Download from './modules/Download/Download.tsx'
import Block from './modules/Block/Block.tsx'
import Imgset from './modules/Imgset/Imgset.tsx'
import sum from './Text.tsx'


function App() {

  return (
    <div className='app'>
      <header className='header'>
        <Logo/>
        <div className='btn'>
          <Download/>
        </div>
        <Contact/>
      </header>
      <div className='main'>
        <Imgset/>
        <Block title={sum[0].title} text={sum[0].text} />
        <Block title={sum[1].title} text={sum[1].text}/>



        
        <Block title={sum[2].title} text={sum[2].text}/>
        <Download/>
      </div>
    </div>
  )
}

export default App
