import { Button, Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {

  function openWin() {
    window.open("https://github.com/riyakarnik2003");
  }
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          <Button onClick={openWin} style={{marginTop:10}}>Show Code</Button>
        </div>
       
      </div>
      
    </Col>
  )
}
