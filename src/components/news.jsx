export default function News(props) {
    return (
        <section id="ant-section__ant010_blog" className="ant-section__ant010_blog ">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="art_net_theme_header-section">

                            <div className="art_net_theme_section-overtitle">
                                <p>{props.subtitle}</p>
                            </div>

                            <div className="art_net_theme_section-title">
                                <h2>{props.title1}</h2>
                            </div>

                            <div className="art_net_theme_section-title-separator">
                                <img src="img/separator.png" />
                            </div>

                            <div className="art_net_theme_section-subtitle">
                                <p>{props.text1}</p>
                                <p>{props.text2}</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row ant010_blog__items">
                    <div className="col-lg-4 col-md-6">
                        <div className="news-item">
                            <div className="news-img">


                                <img src="img/oaktree_e-370x260.jpg"
                                    alt="Институциональный SWOT-анализ: повторный контакт или рекламоноситель?" />
                            </div>
                            <div className="news-text">
                                <h5><a href="blog-single.html" className="siteIdea">{props.title2}</a></h5>
                                <p>{props.subtitle2}</p>
                                <div className="news-det">
                                    <span>27 Апр 2024</span>
                                    <a href="blog-single.html">{props.more}</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}