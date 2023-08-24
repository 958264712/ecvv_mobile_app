import "./four.css";
import threeKong from "../../assets/images/threeKong.webp";
import three_blue_bottom from "../../assets/images/three_blue_bottom.webp";
import three_blue from "../../assets/images/three_blue.webp";
import fourBackground from "../../assets/images/fourBackground.jpg";

const Four = () => {
  return (
    <section className="main-page">
      <div className="layerbox">
        <ul className="layeritems" style={{ padding: 0 }}>
          <li
            style={{
              zIndex: 8,
              width: "144px",
              height: "38px",
              top: "33px",
              left: "84px",
            }}
            className="item item-comp wsite-text"
          >
            <div
              className="element-box"
              style={{
                animation: "1s ease 1.3s 1 normal both running fadeInLeft",
              }}
            >
              <div className="element-box-contents">
                <div className="element comp_paragraph editable-text">
                  <span
                    style={{
                      lineHeight: "18px",
                      fontSize: "16px",
                      color: "rgb(82, 130, 179)",
                    }}
                  >
                    CULTURE
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li
            style={{
              zIndex: 7,
              width: "144px",
              height: "38px",
              top: "33px",
              left: "10px",
            }}
            className="item item-comp wsite-text"
          >
            <div
              className="element-box"
              style={{
                animation: "1s ease 1.5s 1 normal both running fadeInLeft",
              }}
            >
              <div className="element-box-contents">
                <div className="element comp_paragraph editable-text">
                  <span
                    style={{
                      fontSize: "18px",
                      color: "rgb(9, 76, 145)",
                    }}
                  >
                    企业文化
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li
            style={{
              zIndex: 5,
              width: "241.5px",
              height: "45.5px",
              top: "20.5px",
              left: "-51.5px",
            }}
            className="item item-comp"
          >
            <div
              className="element-box"
              style={{
                animation: "1s ease 1s 1 normal both running fadeInLeft",
              }}
            >
              <div className="element-box-contents">
                <img
                  className="element comp_image editable-image"
                  style={{
                    display: "block",
                    width: "241.5px",
                    height: "45.5px",
                  }}
                  src={threeKong}
                />
              </div>
            </div>
          </li>
          <li
            style={{
              zIndex: 4,
              width: "299px",
              height: "17px",
              top: "59px",
              left: "-32.5px",
            }}
            className="item item-comp"
          >
            <div
              className="element-box"
              style={{
                animation: "1s ease 0.6s 1 normal both running fadeInLeft",
              }}
            >
              <div className="element-box-contents">
                <img
                  className="element comp_image editable-image"
                  style={{
                    display: "block",
                    width: "299px",
                    height: "17px",
                  }}
                  src={three_blue_bottom}
                />
              </div>
            </div>
          </li>
          <li
            style={{
              zIndex: 3,
              width: "271px",
              height: "42.5px",
              top: "23px",
              left: "-32.5px",
            }}
            className="item item-comp"
          >
            <div
              className="element-box"
              style={{
                animation: "1s ease 0.8s 1 normal both running fadeInLeft",
              }}
            >
              <div className="element-box-contents">
                <img
                  style={{
                    display: "block",
                    width: "271px",
                    height: "42.5px",
                  }}
                  src={three_blue}
                />
              </div>
            </div>
          </li>
          <li
            style={{
              zIndex: 2,
              width: "375px",
              height: "134.5px",
              top: "81px",
            }}
            className="item item-comp wsite-text"
          >
            <div
              className="element-box"
              style={{
                animation: "1s ease 1.8s 1 normal both running fadeInRight",
              }}
            >
              <div className="element-box-contents">
                <img
                  style={{
                    display: "block",
                    width: "375.264px",
                    height: "134.5px",
                    marginLeft: "-0.131757px",
                  }}
                  className="element comp_image editable-image"
                  draggable="false"
                  src={fourBackground}
                />
              </div>
            </div>
          </li>
          <li
            style={{
              zIndex: 1,
              width: "375px",
              height: "500px",
              top: "215px",
            }}
            className="list item-comp wsite-text"
          >
            <ul>
              <li>
                <header>使 命</header>
                <div>为全球贸易的共荣和发展做出贡献</div>
              </li>
              <li>
                <header>价值观</header>
                <div>
                  <div>自动自发，承担责任，注重细节</div>
                  <div>善于创造，适应压力，永不放弃</div>
                </div>
              </li>
              <li>
                <header>目 标</header>
                <div>做最可靠的代理采购电商平台</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <section className="u-arrow-bottom" style={{ bottom: "7vh" }}>
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

export default Four;
