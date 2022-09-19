import './Header.css'
import header from '../../assets/header.png';

export default function Header() {
    return (
      <div className='header'>
        <div className="headerTitles">
        <span className='headerTitleSm'>Computing & IT</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img className='headerImg' src={header} alt="header foto" />  
      </div>
    )
  }