import './HeroGif.css'

function HeroGif({ gif, text }: { gif: string; text: string }) {
       return (
           <div className="hero_gif">
            <div>
               <img className='gif' src={gif} alt="" />
               <p className='gif_text'>{text}</p>
            </div>
           </div>
       )
}

export default HeroGif