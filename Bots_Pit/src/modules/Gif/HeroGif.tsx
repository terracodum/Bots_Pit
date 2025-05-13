import './HeroGif.css'

function HeroGif({ gif }: { gif: string }) {
       return (
           <div className="hero_gif">
               <img className='gif' src={gif} alt="" />
           </div>
       )
}

export default HeroGif