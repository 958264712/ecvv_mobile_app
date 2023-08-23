import "./two.css";
import twoBusiness from "../../assets/images/twoBusiness.webp";
import kong from "../../assets/images/kong.webp";
import blueimg from "../../assets/images/blueimg.webp";
import blueimg_two from "../../assets/images/blueimg_two.webp";
import twoBackground from "../../assets/images/twoBackground.webp";


const Two = () => {
  return (
    <section className="main-page">
      <div className="layerbox">
        <ul className="layeritems" style={{ padding: 0 }}>
          <li
            className="wsite-text"
            style={{
              zIndex: 10,
              top: " 406px",
              left: "55px",
              width: "288px",
              height: "143px",
            }}
          >
            <div
              className="element-box"
              style={{
                animation: "1s ease 1.8s 1 normal both running fadeInLeft",
              }}
            >
              <div className="element-box-contents">
                <div className="comp_paragraph">
                  <div>
                    <span
                      style={{ color: "rgb(129, 133, 135)", fontSize: "14px" }}
                    >
                      深圳伊西威威网络科技股份有限公司是外贸综合服务电商平台，我们提供如下服务：
                      为海外买家提供最可靠的代理采购服务；为全球的好工业品提供代销服务和自营采购；
                      旗下小威子公司为合作客户提供报关、结汇、退税、物流一揽子供应链服务。
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            className="wsite-text"
            style={{
              zIndex: 9,
              width: "286px",
              height: "38px",
              top: " 370px",
              left: "55px",
            }}
          >
            <div
              className="element-box"
              style={{
                animation: "1s ease 1.6s 1 normal both running fadeInRight",
              }}
            >
              <div className="element-box-contents">
                <div className="comp_paragraph">
                  <span style={{ color: "rgb(9, 76, 145)", fontSize: "16px" }}>
                    深圳伊西威威网络科技股份有限公司
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li
            className="item item-comp wsite-text"
            style={{
              zIndex: 8,
              width: "144px",
              height: "38px",
              top: " 325px",
              left: "265px",
            }}
          >
            <div
              className="element-box"
              style={{
                animation: "1s ease 1.4s 1 normal both running fadeInRight",
              }}
            >
              <div className="element-box-contents">
                <div className="element comp_paragraph editable-text">
                  <span
                    style={{
                      lineHeight: "18px",
                      color: "rgb(82, 130, 179)",
                      fontSize: "16px",
                    }}
                  >
                    ABOUT US
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li
            className="item item-comp wsite-text"
            style={{
              zIndex: 7,
              width: "144px",
              height: "38px",
              top: " 325px",
              left: "185px",
            }}
          >
            <div
              className="element-box"
              style={{
                animation: " 1s ease 1.2s 1 normal both running fadeInRight",
              }}
            >
              <div className="element-box-contents">
                <div className="element comp_paragraph editable-text">
                  <span
                    style={{
                      color: "rgb(9, 76, 145)",
                      fontSize: "18px",
                    }}
                  >
                    公司简介
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li
            className="item item-comp  wsite-text"
            style={{
              zIndex: 6,
              width: "151px",
              height: "22.5px",
              top: " 78.5px",
              left: "108px",
            }}
          >
            <div
              className="element-box"
              style={{
                animation: " 1s ease 2.3s 1 normal both running fadeInUp",
              }}
            >
              <div className="element-box-contents">
                <img
                  className="element comp_image editable-image"
                  style={{
                    display: "block",
                    width: "151px",
                    height: "22.5px",
                  }}
                  src={twoBusiness}
                />
              </div>
            </div>
          </li>
          <li
            className="item item-comp wsite-text"
            style={{
              zIndex: 5,
              width: "241.5px",
              height: "45.5px",
              top: " 307.5px",
              left: "153.5px",
            }}
          >
            <div
              className="element-box"
              style={{
                animation: "1s ease 1s 1 normal both running fadeInRight",
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
                  src={kong}
                />
              </div>
            </div>
          </li>
          <li
            className="item item-comp wsite-text"
            style={{
              zIndex: 4,
              width: "299px",
              height: "17px",
              top: "340px",
              left: "76px",
            }}
          >
            <div
              className="element-box"
              style={{
                animation: "1s ease 0.6s 1 normal both running fadeInRight",
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
                  src={blueimg}
                />
              </div>
            </div>
          </li>
          <li
            style={{
              zIndex: 3,
              width: "271px",
              height: "42.5px",
              top: "307px",
              left: "103px",
            }}
            className="item item-comp wsite-text"
          >
            <div
              className="element-box"
              style={{
                animation: "1s ease 0.8s 1 normal both running fadeInRight",
              }}
            >
              <div className="element-box-contents">
                <img
                  style={{
                    display: "block",
                    width: "271px",
                    height: "42.5px",
                  }}
                  className="element comp_image editable-image"
                  src={blueimg_two}
                />
              </div>
            </div>
          </li>
          <li
            style={{
              zIndex: 2,
              width: "375px",
              height: "370px",
            }}
            className="item item-comp wsite-text"
          >
            <div
              className="element-box"
              style={{
                animation: "1s ease 0.3s 1 normal both running fadeInLeft",
              }}
            >
              <div className="element-box-contents">
                <img
                  style={{
                    display: "block",
                    width: "375.264px",
                    height: "370px",
                    marginLeft: "-0.131757px",
                  }}
                  className="element comp_image editable-image"
                  draggable="false"
                  src={twoBackground}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Two;
