import React from 'react'
import './footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div>
       <section className="footer">
        <div className="outer-container-footer">
            <div className="icons">
                <ul>
                    <li><FacebookOutlinedIcon /></li>
                    <li><InstagramIcon /></li>
                    <li><TwitterIcon /></li>
                    <li><YouTubeIcon /></li>
                </ul>
            </div>
            <div className="all-divs">
                <div className="lists">
                    <ul>
                        <li>Auto Description</li>
                        <li>Investor Relations</li>
                        <li>Privacy</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="lists">
                     <ul>
                        <li>Help Center</li>
                        <li>Jobs</li>
                        <li>Legal Notice</li>
                        <li>Do Not Sell or Share my Pesronal Information</li>
                    </ul>
                    
                </div>
                <div className="lists">
                     <ul>
                        <li>Gift Cards</li>
                        <li>Netflix Shop</li>
                        <li>Cookie Prefrences</li>
                        <li>Ad Choices</li>
                    </ul>
                    
                </div>
                <div className="lists">
                     <ul>
                        <li>Media Center</li>
                        <li>Terms of Use</li>
                        <li>Corporate Information</li>
                    </ul>
                    
                </div>
            </div>
        </div>
     </section>
    </div>
  )
}

export default Footer
