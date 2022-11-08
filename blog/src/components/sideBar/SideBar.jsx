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
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Networking</li>
                    <li className="sidebarListItem">HTML</li>
                    <li className="sidebarListItem">CSS</li>
                    <li className="sidebarListItem">Java Script</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                <i className=" sidebarIcon fa-brands fa-facebook-square"></i>
                </div>
            </div> 
        </div>
    )
}