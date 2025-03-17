import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <Link href="/">Home</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/" onClick={() => setMobileToggle(false)}>
              Home Version 1
              </Link>
            </li>
            <li>
              <Link href="/home2" onClick={() => setMobileToggle(false)}>
              Home Version 2
              </Link>
            </li>            
          </ul>
        </DropDown>
      </li>
      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
        About Us  
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
      <li>
        <Link href="/pricing" onClick={() => setMobileToggle(false)}>
        Pricing
        </Link>
      </li>         
      <li className="menu-item-has-children">
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>           
            <li>
              <Link
                href="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
