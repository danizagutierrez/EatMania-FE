import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="footer_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-col">
                        <div className="footer_contact">
                            <h4>Contact Us</h4>
                            <div className="contact_link_box">
                                <a href="">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <span>Vancouver BC,Canada</span>
                                </a>
                                <a href="">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>Call +01 1234567890</span>
                                </a>
                                <a href="">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span>contact@eatmania.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 footer-col">
                        <div className="footer_detail">
                            <a href="" className="footer-logo">
                                Eat Mania
                            </a>
                            <p>
                            Welcome to Eatmania, where every bite counts! Our platform is your go-to destination for culinary exploration. 
                            Whether you're seeking the perfect restaurant, comparing kitchen gadgets, or exploring diverse cuisines, Eatmania is here to guide your taste journey. Discover, compare, and savor the best of the culinary world with us
                            </p>
                            <div className="footer_social">
                                <a href="https://www.facebook.com"  target='_blank'>
                                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                                </a>
                                <a href="https://twitter.com" target='_blank'>
                                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                                </a>
                                <a href="https://www.linkedin.com"  target='_blank'>
                                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                                </a>
                                <a href="https://www.instagram.com" target='_blank'>
                                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                                </a>
                                <a href="https://www.pinterest.com" target='_blank'>
                                    <FontAwesomeIcon icon={['fab', 'pinterest']} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 footer-col">
                        <h4>Partner with us!</h4>
                        <p>Contact us to our main email:</p>
                        <p>addmyrestaurant@eatmania.com</p>
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
