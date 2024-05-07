import { data } from "../data"

export default function Preview(props) {
    return (
        <section id="ant-section__ant012_welcome" class="ant-section__ant012_welcome ">

            <div class="banner-parallax">

                <div class="overlay-colored color-bg-heading opacity-60"></div>

                <div class="slide-content">

                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">

                                <div class="banner-center-box text-white">

                                    <h1>{props.title}</h1>
                                    <div class="description">
                                        <p>{props.text}</p>
                                    </div>

                                    <a class="btn popup-btn xx-large rounded colorful hover-colorful-darken"
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