import './SideBar.css';
import aboutMe from '../../assets/aboutMe.png';

export default function SideBar() {
    return (
        <div className='sideBar'>
            <div className='sidebarItem'>
                <span className="sidebarTitle">About Me</span>
                <img className='aboutMeImg' src={aboutMe} alt="about me" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, laborum exercitationem. Possimus officia quo mollitia? Culpa maiores quaerat repellendus.</p>
            </div>
        </div>
    )
}