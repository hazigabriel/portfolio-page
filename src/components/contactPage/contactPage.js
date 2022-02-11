import "./contactPage.scss"
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function ContactPage() {
    return (
        <section className="sectionWrapper" id="contact">
            <div className="contactContent sectionContent">
                <div className="contactIcons">
                    <h3>
                        Find me on:
                    </h3>
                    <div className="contactIconsWrapper">
                        <a href="https://github.com/hazigabriel">
                            <div>
                                <FaGithub/>
                                <p>Github</p> 
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/gabriel-hazi-080462131/">
                            <div>
                                <FaLinkedin/>
                                <p>LinkedIn</p> 
                            </div>
                        </a>
                    </div>
                </div>
                <div className="contactFormWrapper">
                    <form action="https://formsubmit.co/f7f15502a5883178926ee2b86559ff2d" method="POST">
                        <h3>Send me an e-mail</h3>
                        <input type="text" id="name" name="name" placeholder="Your name" required  />
                        <input type="email" id="email" name="email" placeholder="Your e-mail address" required />
                        <textarea id="subject" name="subject" placeholder="Your message" required  ></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default ContactPage