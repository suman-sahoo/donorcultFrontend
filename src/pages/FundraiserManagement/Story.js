import React from 'react';
import {FacebookShareButton,WhatsappShareButton,FacebookIcon,WhatsappIcon} from "react-share";
import template1 from '../../images/template1.jpg';


const Story = (props) =>{
  return (
    <div className="phbdytab">
    <div className="Ctbar stortbdy">
        <ul>
            <li className="sicon"><WhatsappShareButton url="" title="whatsApp"><WhatsappIcon size={24} round={true} /></WhatsappShareButton></li>					
            <li className="sicon"><FacebookShareButton url="" quote="facebook" hashtag={'#st'}><FacebookIcon size={24} round={true} /></FacebookShareButton></li>
        </ul>
    </div>
    <div className="container">
            <div className="row">
                <div className="col col-lg-12">
                    <div className="storyimg">
                        <img src={template1} alt="phimg" className="" style={{width : 240}}/>    
                    </div>
                    <div className="phdetails">
                        <h3>Amphan</h3>
                        <p className="description">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
                        
                    </div>
                </div>
            </div>
            
    </div>
</div>
    );
}
export default Story;