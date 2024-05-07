export default function Footer(props) {
    return (
        <footer id="ant-section__ant007_footer" class="" >

        <div class="container">
            <div class="row">

                <div class="col-lg-5 ant007_footer__foter-item-wrap">
                    <div class="footer-item">
                        <p>{props.text}</p>
                        <a href="#contact" class="btn" title="Заказать звонок">{props.title}</a>

                    </div>
                </div>
                <div class="col-lg-2 col-md-4 ant007_footer__foter-item-wrap footer-col-4">
                    <div class="footer-item">
                        <h6>{props.info}</h6>

                        <ul class="footer-menu">
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