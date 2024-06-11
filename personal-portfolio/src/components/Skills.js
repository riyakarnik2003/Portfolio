import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import meter6 from "../assets/img/meter6.svg";
import meter7 from "../assets/img/meter7.svg";
import meter8 from "../assets/img/meter8.svg";
import meter9 from "../assets/img/meter9.svg";
import meter10 from "../assets/img/meter10.svg";
import meter11 from "../assets/img/meter11.svg";
import meter12 from "../assets/img/meter12.svg";
import meter13 from "../assets/img/meter13.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills and Abilities</h2>
                       
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>BootStrap</h5>
                            </div>

                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>C/C++</h5>
                            </div>

                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Python</h5>
                            </div>

                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Java</h5>
                            </div>


                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>

                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>Express Js</h5>
                            </div>

                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>Node js</h5>
                            </div>

                            <div className="item">
                                <img src={meter11} alt="Image" />
                                <h5>React js</h5>
                            </div>

                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>Material UI</h5>
                            </div>

                            <div className="item">
                                <img src={meter13} alt="Image" />
                                <h5>Postman</h5>
                            </div>
              
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
