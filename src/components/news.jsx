export default function News(props) {
    return (
        <section id="ant-section__ant010_blog" class="ant-section__ant010_blog ">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="art_net_theme_header-section">

                            <div class="art_net_theme_section-overtitle">
                                <p>{props.subtitle}</p>
                            </div>

                            <div class="art_net_theme_section-title">
                                <h2>{props.title1}</h2>
                            </div>

                            <div class="art_net_theme_section-title-separator">
                                <img src="img/separator.png" />
                            </div>

                            <div class="art_net_theme_section-subtitle">
                                <p>{props.text1}</p>
                                <p>{props.text2}</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="row ant010_blog__items">
                    <div class="col-lg-4 col-md-6">
                        <div class="news-item">
                            <div class="news-img">


                                <img src="img/oaktree_e-370x260.jpg"
                                    alt="Институциональный SWOT-анализ: повторный контакт или рекламоноситель?" />
                            </div>
                            <div class="news-text">
                                <h5><a href="blog-single.html" class="siteIdea">{props.title2}</a></h5>
                                <p>{props.subtitle2}</p>
                                <div class="news-det">
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