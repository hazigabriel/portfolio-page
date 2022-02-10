import './portfolioPage.scss';
import shoppingPageVideo from "../../assets/shoppingCartVideo.mp4";
import cardGameVideo from "../../assets/cardGameVideo.mp4"
function PortfolioPage() {
    return (
        <section className="sectionWrapper" id="portfolio">
            <div className="portfolioContent sectionContent">
                <div className="portfolioItemWrapper">
                    <div className="itemDescription">
                        <h2>Title</h2>
                        <p>Short description</p>

                        <div className="portfolioButtons">
                            <div>
                                <a href="#">source code</a>
                            </div>
                            <div>
                                <a href="#">live page</a>
                            </div>
                        </div>
                    </div>
                    <div className="itemVideo">
                        <div className="videoWrapper">
                            <video loop autoPlay muted>
                                <source
                                    src={shoppingPageVideo}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                <div className="portfolioItemWrapper">
                    <div className="itemDescription">
                        <h2>Title</h2>
                        <p>Short description</p>

                        <div className="portfolioButtons">
                            <div>
                                <a href="#">source code</a>
                            </div>
                            <div>
                                <a href="#">live page</a>
                            </div>
                        </div>
                    </div>
                    <div className="itemVideo">
                        <div className="videoWrapper">
                            <video loop autoPlay muted>
                                <source
                                    src={cardGameVideo}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                <div className="portfolioItemWrapper">
                    <div className="itemDescription">
                        <h2>Title</h2>
                        <p>Short description</p>

                        <div className="portfolioButtons">
                            <div>
                                <a href="#">source code</a>
                            </div>
                            <div>
                                <a href="#">live page</a>
                            </div>
                        </div>
                    </div>
                    <div className="itemVideo">
                        <div className="videoWrapper">
                            <video loop autoPlay muted>
                                <source
                                    src={shoppingPageVideo}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                 
            </div>
        </section>
    )
}

export default PortfolioPage