import { FaFacebook,FaTwitter,FaLinkedin  } from "react-icons/fa6";
function Footer() {
  
    return (
      <div className="footer">
        <div className="ft_ul">
      <ul>
        <li className="li_h">Home</li>
        <li>Categories</li>
        <li>Devices</li>
        <li>Pricing</li>
        <li>FAQ</li>
      </ul>
      <ul>
        <li className="li_h">Movies</li>
        <li>Gernes</li>
        <li>Trending</li>
        <li>New Release</li>
        <li>Popular</li>
      </ul>
      <ul>
        <li className="li_h">Shows</li>
        <li>Genres</li>
        <li>Trending</li>
        <li>New Release</li>
        <li>Popular</li>
      </ul>
      <ul>
        <li className="li_h">Support</li>
        <li>Contact Us</li>
      </ul>
      <ul>
        <li className="li_h">Subscription</li>
        <li>Plan</li>
        <li>Features</li>
      </ul>
      <ul>
        <li className="li_h">Connect With Us</li>
        <li>
<button><FaFacebook  className="btn_icn" /></button>
<button><FaTwitter  className="btn_icn" /></button>
<button><FaLinkedin  className="btn_icn" /></button>
        </li>
      </ul>
      </div>
      <hr/>
<div className="hr_txt">
    <p>@2023 streamvib, All Rights Reserved</p>
    <div className="a_taq">
        <a>Terms of Use       </a>
        <a>Privacy Policy     </a>
        <a>Cookie Policy      </a>
    </div>
</div>
      </div>
      
    );
  }
  
  export default Footer;
  