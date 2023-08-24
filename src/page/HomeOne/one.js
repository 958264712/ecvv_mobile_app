import "./one.css";
import oneBackground from "../../assets/images/oneBackground.webp";
import business from "../../assets/images/business.webp";
import ecvvLogo from "../../assets/images/ecvvLogo.webp";
import left from "../../assets/images/left.webp";
import top from "../../assets/images/top.webp";
import company from "../../assets/images/company.webp";
import leftTop from "../../assets/images/leftTop.webp";
import rightBottom from "../../assets/images/rightBottom.webp";
import introdiction from "../../assets/images/introdiction.webp";
import thumbnail from "../../assets/images/thumbnail.webp";

const One = () => {
  return (
    <section className="main-page">
      <div className="layerbox">
        <ul className="layeritems" style={{ padding: 0 }}>
          <li
            className="item itemcomp"
            style={{
              position: "absolute",
              zIndex: 13,
              opacity: 1,
              width: "200px",
              height: "30px",
              bottom: "130px",
              left: "88px",
              transform: "rotateZ(0deg)",
            }}
          >
            <div
              className="elementbox"
              style={{
                width: "100%",
                height: "100%",
                zIndex: "auto",
                animation: "1s ease 1.9s 1 normal both running zoomIn",
              }}
            >
              <div className="elementboxcontents">
                <img
                  className="element comp_image editableimage"
                  style={{
                    display: "block",
                    width: "200px",
                    height: "30px",
                  }}
                  draggable="false"
                  src={business}
                />
              </div>
            </div>
          </li>
          <li
            className="item itemcomp wsitetext"
            style={{
              position: "absolute",
              zIndex: 12,
              opacity: 1,
              width: "231px",
              height: "38px",
              bottom: "90px",
              left: "110px",
              transform: " rotateZ(0deg)",
              display: "block",
            }}
          >
            <div
              className="elementbox"
              style={{
                width: "100%",
                height: "100%",
                fontSize: "24px",
                writingMode: "horizontaltb",
                zIndex: "auto",
                borderStyle: "solid, color: rgb(103, 103, 103)",
                textAlign: "left",
                animation: " 1s ease 2s 1 normal both running fadeInUp",
              }}
            >
              <div className="elementboxcontents">
                <div
                  className="element comp_paragraph editabletext"
                  style={{
                    cursor: "default",
                    userselect: "auto",
                    fontSize: "24px",
                    writingmode: "horizontaltb",
                  }}
                >
                  <span
                    style={{ color: "rgb(176, 197, 220)", fontSize: " 18px" }}
                  >
                    www.ecvv.com
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li
            className="item itemcomp wsitetext"
            style={{
              position: "absolute",
              zIndex: 11,
              opacity: 1,
              width: "228px",
              height: "43px",
              top: "420px",
              right: "10px",
              transform: "rotateZ(0deg)",
              display: "block",
            }}
          >
            <div
              className="elementbox"
              style={{
                width: "100%",
                height: " 100%",
                color: " rgb(103, 103, 103)",
                textAlign: "left",
                animation: "1s ease 1.6s 1 normal both running fadeInRight",
              }}
            >
              <div className="elementboxcontents">
                <div className="element comp_paragraph editabletext">
                  <span style={{ color: "rgb(9, 76, 145)", fontSize: "14px" }}>
                    深圳伊西威威网络科技股份有限公司
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li
            className="item itemcomp"
            style={{
              position: "absolute",
              zIndex: 10,
              opacity: 1,
              width: "66px",
              height: "30px",
              top: "300px",
              right: "10px",
            }}
          >
            <div
              className="elementbox"
              style={{
                width: "100%",
                height: "100%",
                zIndex: "auto",

                color: "rgb(103, 103, 103)",
                textAlign: "left",
                animation: " 1s ease 1s 1 normal both running fadeInLeft",
              }}
            >
              <div className="elementboxcontents">
                <img
                  className="element comp_image editableimage"
                  style={{
                    display: "block",
                    width: "66px",
                    height: "27.5451px",
                    marginTop: "3.77257px",
                  }}
                  src={ecvvLogo}
                />
              </div>
            </div>
          </li>
          <li
            className="item itemcomp"
            style={{
              position: "absolute",
              zIndex: 9,
              opacity: 1,
              width: "164px",
              height: "188.5px",
              top: "315.5px",
              left: " 0px",
            }}
          >
            <div
              className="elementbox"
              style={{
                width: "100%",
                height: "100%",
                top: "274.5px",
                left: "25px",
                zIndex: "auto",

                color: "rgb(103, 103, 103)",
                textAlign: "left",
                animation: " 1s ease 0.8s 1 normal both running fadeInLeft",
              }}
            >
              <div className="elementboxcontents">
                <img
                  className="element comp_image editableimage"
                  style={{
                    display: "block",
                    width: "164px",
                    height: "188.5px",
                  }}
                  src={left}
                />
              </div>
            </div>
          </li>
          <li
            className="item itemcomp"
            style={{
              position: "absolute",
              zIndex: 8,
              opacity: 1,
              width: "130px",
              height: "120px",
              top: "160.5px",
              right: "-10px",
            }}
          >
            <div
              className="elementbox"
              style={{
                width: "100%",
                height: "100%",
                zIndex: "auto",
                color: "rgb(103, 103, 103)",
                textAlign: "left",
                animation: " 1s ease 0.8s 1 normal both running fadeInRight",
              }}
            >
              <div className="elementboxcontents">
                <img
                  className="element comp_image editableimage"
                  style={{
                    display: "block",
                    width: "130px",
                    height: "120px",
                  }}
                  src={top}
                />
              </div>
            </div>
          </li>
          <li
            className="item itemcomp"
            style={{
              position: "absolute",
              zIndex: 7,
              opacity: 1,
              width: "123.5px",
              height: "85.5px",
              top: "30px",
              left: " 0px",
            }}
          >
            <div
              className="elementbox"
              style={{
                width: "100%",
                height: "100%",
                top: "2px",
                left: "27px",
                zIndex: "auto",

                color: "rgb(103, 103, 103)",
                textAlign: "left",

                animation: " 1s ease 0.5s 1 normal both running fadeInLeft",
              }}
            >
              <div className="elementboxcontents">
                <img
                  className="element comp_image editableimage"
                  style={{
                    display: "block",
                    width: "123.5px",
                    height: " 85.5px",
                  }}
                  src={thumbnail}
                />
              </div>
            </div>
          </li>
          <li
            className="item itemcomp"
            style={{
              position: "absolute",
              zIndex: 6,
              opacity: 1,
              width: "136.5px",
              height: "21px",
              bottom: "270px",
              right: "10px",
            }}
          >
            <div
              className="elementbox"
              style={{
                width: "100%",
                height: "100%",
                zIndex: "auto",
                color: "rgb(103, 103, 103)",
                textAlign: "left",
                animation: " 1s ease 1.3s 1 normal both running fadeInRight",
              }}
            >
              <div className="elementboxcontents">
                <img
                  className="element comp_image editableimage"
                  style={{
                    display: "block",
                    width: " 136.5px",
                    height: " 21px",
                  }}
                  src={introdiction}
                />
              </div>
            </div>
          </li>
          <li
            className="item itemcomp"
            style={{
              position: "absolute",
              zIndex: 5,
              opacity: 1,
              width: "138px",
              height: "33px",
              bottom: "300px",
              right: "10px",
            }}
          >
            <div
              className="elementbox"
              style={{
                width: "100%",
                height: "100%",
                zIndex: "auto",

                color: "rgb(103, 103, 103)",
                textAlign: "left",

                animation: " 1s ease 1.3s 1 normal both running fadeInLeft",
              }}
            >
              <div className="elementboxcontents">
                <img
                  style={{
                    display: "block",
                    width: " 138px",
                    height: " 33px",
                  }}
                  src={company}
                />
              </div>
            </div>
          </li>
          <li
            className="item itemcomp"
            style={{
              position: "absolute",
              zIndex: 4,
              opacity: 1,
              width: "110px",
              height: "79px",
              top: "540px",
              right: "0",
            }}
          >
            <div
              className="elementbox"
              style={{
                width: "100%",
                height: "100%",
                zIndex: "auto",
                color: "rgb(103, 103, 103)",
                textAlign: "left",
                animation: "1s ease 0.3s 1 normal both running fadeInRight",
              }}
            >
              <div className="elementboxcontents">
                <img
                  style={{
                    display: "block",
                    width: " 110px",
                    height: " 79px",
                    marginleft: "7.10543e15px",
                  }}
                  src={rightBottom}
                />
              </div>
            </div>
          </li>
          <li
            className="item itemcomp"
            style={{
              position: "absolute",
              zIndex: 3,
              opacity: 1,
              width: "110px",
              height: "71.5px",
              top: "0",
              left: "0",
            }}
          >
            <div
              className="elementbox"
              style={{
                width: "100%",
                height: "100%",
                zIndex: "auto",
                color: "rgb(103, 103, 103)",
                textAlign: "left",
                animation: "1s ease 0.3s 1 normal both running fadeInLeft",
              }}
            >
              <div className="elementboxcontents">
                <img
                  className="element comp_image editableimage"
                  style={{
                    display: "block",
                    width: " 110px",
                    height: " 71.5px",
                  }}
                  src={leftTop}
                />
              </div>
            </div>
          </li>
          <li
            className="item itemcomp"
            style={{
              position: "absolute",
              zIndex: 2,
              opacity: 1,
              width: "377px",
              height: "436px",
              top: "15px",
              left: "0",
            }}
          >
            <div
              className="elementbox"
              style={{
                width: "100%",
                height: "100%",
                zIndex: "auto",
                color: "rgb(103, 103, 103)",
                textAlign: "left",
                animation: "1s ease 0.3s 1 normal both running fadeInUp",
              }}
            >
              <div className="elementboxcontents">
                <img
                  style={{
                    display: "block",
                    width: " 377.298px",
                    height: " 436px",
                    marginleft: "0.149022px",
                  }}
                  className="element comp_image editableimage"
                  src={oneBackground}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <section className="u-arrow-bottom" style={{bottom:" 30px"}}>
        <div className="pre-wrap-bottom">
          <div className="pre-box1">
            <div className="pre1"></div>
          </div>
          <div className="pre-box2">
            <div className="pre2"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default One;
