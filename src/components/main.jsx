import "./index.css";
import photo from "../images/photoMain2.jpeg";
import projectPhoto from "../images/react.png";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
} from "react-icons/ai";

const experience = [
  {
    id: "1",
    date: "09/2019 - Present",
    role: "Mechanical Engineer (HVAC equipment) (Professional Level 2)",
    location: "Atyrau, Kazakhstan",
    company: "North Caspian Operating Company NV",
    sector: "Oil & Gas Sector",
    description: [
      //   "Award: employer of the year 2022",
      //   "Awarded with 4 recognition letters for valuable contribution in Onshore and Offshore assets improvement, support and Turnaround activities",
      //   "Successfully delivered more than 55 management of changes for HVAC equipment which included minor and magor mechanical, electrical, Fire&Gas, control&automation logic modifications",
      //   "Implemented online tracking of HVAC system & equipment, Fire&Gas dampers health status monitoring for Onshore, Offshore, Sulphur plants (6 dashboards with overall more than 1500 equipment)",
      "In collaboration with Operations, maintenance and production Projects drived Venture performance in asset integrity, reliability, costs and product quality by providing high value credible engineering services.",
    ],
  },
  {
    id: "2",
    date: "12/2017 - 04/2019",
    role: "Marine Engineering Officer of the Watch",
    location: "Aktau, Kazakhstan",
    company: "Topaz Marine (P&O Maritime)",
    sector: "Offshore Energy, Port sevices and Logistics",
    description: [
      "Experience on board of icebreaker Tulpar, Module Carrying Vessel Barys as third engineering officer (part of TCO FGP Project)",
      //   "Provided support during commissioning of MCV Barys at Baku",
      //   "Supported with main engine full overhaul in barge TOM-6",
      "Experience as assistant of Marine Technical Superintendent at Aktau office",
    ],
  },
  {
    id: "3",
    date: "08/2015 - 08/2016",
    role: "Engine Apprentice",
    location: "USA, Kazakhstan",
    company: "Chevron, KMTF",
    sector: "Oil &Gas, Port Services and Logistics",
    description: [
      "Successfully completed apprenticeship on board of Chevron Very Large Crude Oil Carrier LEO VOYAGER and KMTF Aframax AKTOBE",
      //   "Support with maintenance activities of mechanical/electric equipment on board of the ships",
      //   "Support with crude oil handling and transportation management",
    ],
  },
];

export default function Main(ref) {
  return (
    <div>
      <div className="section1">
        <div className="section1-Text">
          <p className="section1-Header">
            Hi, I’m Zhanerke, <br /> I build things for the web.
          </p>
          <p className="texts-all">
            I’m software developer and this is my portfolio.
          </p>
        </div>
        <button
          onClick={(event) =>
            window.open(
              "https://drive.google.com/file/d/1wf0z6lgAlcRaseKvQf_52E5HsfZ56TkL/view?usp=share_link",
              "_blank"
            )
          }
        >
          Check out my CV
        </button>
      </div>

      <div id="sectiton-about" className="section2">
        <div className="section2-About">
          <p className="section1-Header">About me</p>
        </div>
        <div className="section2-Part1">
          <div className="section2-Part2">
            <p className="texts-all">
              I am on the way of career switch to software engineer.
              <br /> Skills gained at nFactorial School:
            </p>

            <div className="About-details">
              <ul className="listLeft">
                <li className="texts-all">Basic Java</li>
                <li className="texts-all">HTML, CSS, Javascript</li>
              </ul>
              <ul className="listRight">
                <li className="texts-all">React JS</li>
                <li className="texts-all">
                  Frameworks: Bootstrap, Material UI
                </li>
              </ul>
            </div>
          </div>
          <div className="image">
            <img
              src={photo}
              alt="MyPhoto"
              style={{ width: 280, height: 360 }}
            />
          </div>
        </div>
      </div>

      <div id="sectiton-experience" className="section3">
        <p className="section1-Header">Experience</p>
        {experience.map((item, index) => (
          <div className="experience-table" key={index}>
            <p className="texts-date">{item.date}</p>
            <div className="Experience-table-right">
              <p className="texts-Role">{item.role}</p>
              <p className="texts-Company">{item.company}</p>
              <p className="texts-location">{item.location}</p>
              <p className="texts-sector">{item.sector}</p>
              <p className="texts-resp">
                {item.description.map((item, ind) => (
                  <span key={ind}>
                    - {item} <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div id="sectiton-projects" className="section4">
        <p className="section1-Header">Projects I've Worked On</p>
        <div className="section4-all">
          <div className="image">
            <img
              src={projectPhoto}
              alt="MyPhoto"
              style={{ width: " 70%", height: 360 }}
            />
          </div>
          <div className="section4-2">
            <p className="section1-Header">To Do List</p>
            <p className="texts-all">
              This project was a part of study program at nFactorial School.
            </p>
            <p className="texts-all">Stack: ReactJS</p>
          </div>
        </div>
      </div>

      <div id="sectiton-contact" className="section5">
        <div className="section1-Text">
          <p className="section1-Header">Say Hello!</p>
          <p className="texts-all">Feel free to reach me via:</p>
        </div>
        <div className="section5-buttons">
          <button
            onClick={() =>
              window.open("mailto:zhanerke.sauranbay@gmail.com", "_blank")
            }
          >
            <AiOutlineMail size={56} />
          </button>
          <span>or </span>
          <button
            onClick={(event) => window.open("//wa.me/+77473868976", "_blank")}
          >
            <AiOutlineWhatsApp size={56} />
          </button>
          <span>or </span>
          <button
            onClick={(event) =>
              window.open(
                "https://www.linkedin.com/in/zhanerke-sauranbay/",
                "_blank"
              )
            }
          >
            <AiOutlineLinkedin size={56} />
          </button>
        </div>
      </div>
    </div>
  );
}
