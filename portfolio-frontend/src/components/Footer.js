import React from "react"
import SocialLinks from "../constants/socialLinks"
import { FooterWrapper } from "../elements/FooterElements"
const Footer = () => {
return (

<FooterWrapper>
{/* <footer className="footer"> */}

<div>
<SocialLinks styleClass="footer-links"></SocialLinks>
<h4>
copyright&copy; {new Date().getFullYear()} |
&nbsp;<span>FrontendMAGIC</span> | all rights reserved
</h4>
</div>
{/* </footer> */}
</FooterWrapper>
)
}
export default Footer
