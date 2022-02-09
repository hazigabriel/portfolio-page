import react from "react";
import './landingPage.scss';
 

function LandingPage() {
    function generateDots() {
        
        return (
            <div className="dotRow">
                <div className="dot"> </div>
                <div className="dot"> </div>
                <div className="dot"> </div>
                <div className="dot"> </div>
            </div>
        )
    }

    function animateCube() {
        document.querySelector(".dotsWrapper").style.animation = "rotateCube ease 1s 1"
    }
    setInterval(() => {
        animateCube();
        setTimeout(() => {
            document.querySelector(".dotsWrapper").style.animation = "none"
        }, 1000)         
        //the cube animation takes 1000ms/1s to complete, we remove the the animation after 1000 ms to allow the full
        //animation to be displayed

    }, 5000);
    
    return(
        <section className="landingPageWrapper sectionWrapper">
            <div className="landingPageContent sectionContent">
                    <div className="nameColumn">
                        <div className="nameWrapper">
                            <div>
                                <h2 className="nameMenu"><a href="#about">About</a></h2>
                                <h2 className="nameItem">Hi! My name is</h2>
                            </div>
                            <div>
                                <h2 className="nameMenu"><a href="#portfolio">Portfolio</a></h2>
                                <h2 className="nameItem">Gabriel and I'm</h2>
                            </div>
                            <div>
                                <h2 className="nameMenu"><a href="#contact">Contact</a></h2>
                                <h2 className="nameItem">a Front-end dev</h2>
                            </div>
                        </div>

                    </div>

                    <div className="dotsColumn">
                        <div className="dotsWrapper">
                            {generateDots()}
                            {generateDots()}
                            {generateDots()}
                            {generateDots()}
                        </div>
                    </div>

            </div>
        </section>
    )
}

export default LandingPage