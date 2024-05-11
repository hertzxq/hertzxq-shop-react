export default function Header(props) {
    return (
        <header id="ant-section__ant006_header">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-6 col-6  ant006_header-logo">
                    <a href="index.html" title="logo">{props.logo}</a>
                </div>
                <div className="col-lg-9 col-sm-6 col-md-12 col-6 ant006_header-menu-wrap">
                    <nav className="ant006_header-container">
                        <ul className="menu">
                            <li><a href="#0">{props.main}</a></li>
                            <li className="menu-item"><a href="#0">{props.programms}</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="windowsShop.html">{props.windows}</a></li>
                                    <li className="menu-item"><a href="macShop.html">{props.mac}</a></li>
                                </ul>
                            </li>
                            <li className="menu-item"><a href="#0">{props.plugins}</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="#0">{props.windows}</a></li>
                                    <li className="menu-item"><a href="#0">{props.mac}</a></li>
                                </ul>
                            </li>
                            <li className="menu-item"><a href="#0">{props.news}</a></li>
                            <li className="menu-item"><a href="#0">{props.contacts}</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    )
}