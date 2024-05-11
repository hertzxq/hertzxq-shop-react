export default function Bestadmins(props) {
    return (
        <section id="ant-section__ant011_team" className="ant-section__ant011_team ">

            <div className="container">

                <div className="row">
                    <div className="col-md-12">
                        <div className="art_net_theme_header-section">

                            <div className="art_net_theme_section-overtitle">
                                <p>{props.title}</p>
                            </div>

                            <div className="art_net_theme_section-title">
                                <h2>{props.team}</h2>
                            </div>

                            <div className="art_net_theme_section-title-separator">
                                <img src="img/separator.png" />
                            </div>

                            <div className="art_net_theme_section-subtitle">
                                <p>{props.subtitle}</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row ant010_blog__items row justify-content-center">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
                        <div className="team-member">
                            <div className="team-thumb">

                                <img src="/img/IMG_0058.jpg"
                                    alt="ЭТО Я" />

                                <div className="team-overlay ">
                                    <ul>
                                        <li>
                                            <a title="E-mail" rel="nofollow" target="_blank"
                                                href={props.email}>
                                                <i className="fas fa-envelope"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a title="Инстаграмм" rel="nofollow" target="_blank"
                                                href={props.insta}>
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <h2>{props.name}</h2>

                            <span>{props.dev}</span>

                        </div>
                    </div>

                </div>
            </div>
        </section>
        
    )
}