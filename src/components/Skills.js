import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import htmlicon from '../assets/img/html.png'
import cssicon from '../assets/img/css-3.png'
import jsicon from '../assets/img/js.png'
import reacticon from '../assets/img/structure.png'
import mongoicon from '../assets/img/mongodb.svg'
import sqlicon from '../assets/img/mysql.svg'
import wordicon from '../assets/img/wordpress.png'
import giticon from '../assets/img/git.png'






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
                        <h2>Skills</h2>
                        <p>Here, you'll find a summary of my skills and experience in various areas of web development and design. I've broken down my skills into several categories to make it easier for you to understand my areas of expertise..<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={htmlicon} alt="Image" />
                                <h5>Html</h5>
                            </div>
                            <div className="item">
                            <img src={cssicon} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            
                            <div className="item">
                                <img src={jsicon} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={reacticon} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={mongoicon} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={sqlicon} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={wordicon} alt="Image" />
                                <h5>WordPress</h5>
                            </div>
                            <div className="item">
                                <img src={giticon} alt="Image" />
                                <h5>GIT</h5>
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
