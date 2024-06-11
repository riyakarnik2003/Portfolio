import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { ArrowDownCircleFill } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Tech Enthusiast", "FullStack Developer", "Coder"];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


   function resume(){
    window.open("https://drive.google.com/file/d/1nBpCaGMY9UFnFrIdrdfPlkwKH_nh1VPd/view");
   }
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Riya I'm a `}<span className="txt-rotate" dataPeriod="500" data-rotate='[ "Tech Enthusiast", "FullStack Developer", "Coder" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm Riya Karnik, a passionate software developer. I specialize in Web Development, crafting seamless user experiences and robust backend solutions. With a knack for problem-solving, I thrive on creating elegant code that makes an impact. I'm always exploring new tools and techniques to stay at the forefront of the ever-evolving tech landscape.
                    📫 Open to collaborations and exciting projects, I'm eager to connect with fellow developers and tech enthusiasts. Let's build something amazing together!
                    Happy coding! 🖥️</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  <button onClick={resume} style={{marginTop:10, background:"#fff", color:"#000", borderRadius:5, width:120 ,padding:3}}>Resume<ArrowDownCircleFill size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
