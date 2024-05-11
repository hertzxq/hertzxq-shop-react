import { data } from "../data"

export default function Preview(props) {
    return (
        <section id="ant-section__ant012_welcome" className="ant-section__ant012_welcome ">

            <div className="banner-parallax">

                <div className="overlay-colored color-bg-heading opacity-60"></div>

                <div className="slide-content">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                                <div className="banner-center-box text-white">

                                    <h1>{props.title}</h1>
                                    <div className="description">
                                        <p>{props.text}</p>
                                    </div>

                                    <a className="btn popup-btn xx-large rounded colorful hover-colorful-darken"
                                        href="#contact" title="Заказать услугу">
                                        {props.button} </a>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}