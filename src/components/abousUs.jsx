export default function Aboutus(props) {
    return (
        <section className="ant-section__ant047_text">
            <div className="container">
                <div className="row justify-content-center mb-30-none">
                    <div className="col-lg-6">
                        <div className="service-content mt-60 mb-30 yobject-marked">
                            <h3 className="title">{props.title1}</h3>
                            <p>{props.subtitle1}</p>
                            <p>{props.subtitle2}</p>
                            <div className="button-group">
                                <a href="#0" className="custom-btn">{props.button1}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service-thumb mb-30">
                            <img src="img/ant047_text/about2.png" alt="about image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service-thumb mb-30">
                            <img src="img/ant047_text/about2.png" alt="about image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service-content mt-60 mb-30 yobject-marked">
                            <h3 className="title">{props.title2}</h3>
                                    <p>1 причина этому: у меня доброе сердце</p>
                                    <p>2 причина: я манипулятор и хочу надавить на жалость и тем самым вы скинете мне денег!</p>
                                    <p>PS: вирусов нету, я еще не настолько бедный, хотя я хз, я же ворую установщики ахахаха</p>
                                <a href="#0" class="custom-btn">Потдаться моей жалости...</a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}