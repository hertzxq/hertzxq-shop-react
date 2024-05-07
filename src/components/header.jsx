export default function Header(props) {
    return (
        <header id="ant-section__ant006_header">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-12 col-sm-6 col-6  ant006_header-logo">
                    <a href="index.html" title="logo">{props.logo}</a>
                </div>
                <div class="col-lg-9 col-sm-6 col-md-12 col-6 ant006_header-menu-wrap">
                    <nav class="ant006_header-container">
                        <ul class="menu">
                            <li><a href="#0">{props.main}</a></li>
                            <li class="menu-item"><a href="#0">{props.programms}</a>
                                <ul class="sub-menu">
                                    <li class="menu-item"><a href="windowsShop.html">{props.windows}</a></li>
                                    <li class="menu-item"><a href="macShop.html">{props.mac}</a></li>
                                </ul>
                            </li>
                            <li class="menu-item"><a href="#0">{props.plugins}</a>
                                <ul class="sub-menu">
                                    <li class="menu-item"><a href="#0">{props.windows}</a></li>
                                    <li class="menu-item"><a href="#0">{props.mac}</a></li>
                                </ul>
                            </li>
                            <li class="menu-item"><a href="#0">{props.news}</a></li>
                            <li class="menu-item"><a href="#0">{props.contacts}</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    )
}