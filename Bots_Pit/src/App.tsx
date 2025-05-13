import './App.css'
import "./modules/Logo/Logo.tsx"
import Logo from "./modules/Logo/Logo.tsx"
import Contact from "./modules/Contact/Contact.tsx"
import Download from './modules/Download/Download.tsx'
import Block from './modules/Block/Block.tsx'
import Imgset from './modules/Imgset/Imgset.tsx'
import List from './modules/List/List.tsx'
import Biglist from './modules/BigList/Biglist.tsx'
import Footer from './modules/Footer/Footer.tsx'
import HeroGif from './modules/Gif/HeroGif.tsx'
import sum from './Text.tsx'
import suml from './Lists.tsx'
import walk from "./images/walk.gif";
import damage from './images/damage.gif'
import chat from './images/chat.gif'
import kick from './images/kick.gif'
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
        <div className='hero'>
          <List title={suml[0].title} count={suml[0].count} points={suml[0].points}/>
          <Imgset/>
        </div>
        <Block title={sum[0].title} text={sum[0].text} />
        <Block title={sum[1].title} text={sum[1].text}/>
        <List title={suml[1].title} count={suml[1].count} points={suml[1].points}/>
        <Download/>
        <h2 className='title'>Геймплей</h2>
        <div>
          <Biglist/>
        </div>
        <List title={suml[2].title} count={suml[2].count} points={suml[2].points}/>
        <List title={suml[3].title} count={suml[3].count} points={suml[3].points}/>
        <List title={suml[4].title} count={suml[4].count} points={suml[4].points}/>
        <h2 className='title'>Художественный стиль и звук</h2>
        <List title={suml[5].title} count={suml[5].count} points={suml[5].points}/>
        <List title={suml[6].title} count={suml[6].count} points={suml[6].points}/>
        <h2 className='title'>Технические аспекты</h2>
        <List title={suml[7].title} count={suml[7].count} points={suml[7].points}/>
        <List title={suml[8].title} count={suml[8].count} points={suml[8].points}/>
        <Block title={sum[2].title} text={sum[2].text}/>
        <div className='hero_gif'>
          <HeroGif gif={walk} text={"Ходьба"}/>
          <HeroGif gif={damage} text={"Искры"}/>
          <HeroGif gif={kick} text={"Удар"} />
          <HeroGif gif={chat} text={"Диалог"}/>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default App
