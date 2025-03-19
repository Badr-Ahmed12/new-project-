import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
        About Me
        </Link>
      </li>       
      <li className="menu-item-has-children">
      <Link href="/project" onClick={() => setMobileToggle(false)}>
      Portfolio
        </Link>        
        <DropDown>
          <ul>              
            <li>
              <Link href="/project" onClick={() => setMobileToggle(false)}>
              Portfolio
              </Link>
            </li>           
            <li>
              <Link href="/project/project-details" onClick={() => setMobileToggle(false)}>
                 Project Details
              </Link>
            </li>                        
          </ul>
        </DropDown>
      </li>      
     
      <li className="menu-item-has-children">
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/service/service-details" onClick={() => setMobileToggle(false)}>
                Service Details
              </Link>
            </li>
          </ul>
        </DropDown>

      </li>   
    </ul>
  );
}
