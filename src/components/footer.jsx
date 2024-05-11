export default function Footer(props) {
    return (
        <footer id="ant-section__ant007_footer" className="" >

        <div className="container">
            <div className="row">

                <div className="col-lg-5 ant007_footer__foter-item-wrap">
                    <div className="footer-item">
                        <p>{props.text}</p>
                        <a href="#contact" className="btn" title="Заказать звонок">{props.title}</a>

                    </div>
                </div>
                <div className="col-lg-2 col-md-4 ant007_footer__foter-item-wrap footer-col-4">
                    <div className="footer-item">
                        <h6>{props.info}</h6>

                        <ul className="footer-menu">
                            <li>
                                <a href="index.html">{props.backOnSite}</a>
                            </li>
                            <li>
                                <a href="/windowsShop.html">{props.windows}</a>
                            </li>
                            <li>
                                <a href="/macShop.html">{props.mac}</a>
                            </li>
                            <li>
                                <a href="#">{props.news}</a>
                            </li>
                            <li>
                                <a href="#">{props.contacts}</a>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>
    </footer>
    )
}