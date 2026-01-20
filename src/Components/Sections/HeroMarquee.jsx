import '../../CSS/heromarquee.css'
import sparkle from '../../assets/sparkle_icon_big.png'

function HeroMarquee() {
  return (
      <div className="hero-marquee">
        <span className="marquee-track">
           As Seen On Michelin Guide Food Festival 
           <img src={sparkle} alt="sparkle" className="inline-symbol" />As Seen On Michelin Guide Food Festival 
           <img src={sparkle} alt="sparkle" className="inline-symbol" />As Seen On Michelin Guide Food Festival 
           <img src={sparkle} alt="sparkle" className="inline-symbol" />As Seen On Michelin Guide Food Festival 
           <img src={sparkle} alt="sparkle" className="inline-symbol" />As Seen On Michelin Guide Food Festival 
           <img src={sparkle} alt="sparkle" className="inline-symbol" />As Seen On Michelin Guide Food Festival 
        </span>
      </div>
  );
}

export default HeroMarquee;
