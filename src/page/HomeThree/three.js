import { Steps } from "antd-mobile";
import "./three.css";
import threeKong from "../../assets/images/threeKong.webp";
import three_blue_bottom from "../../assets/images/three_blue_bottom.webp";
import three_blue from "../../assets/images/three_blue.webp";
import threeBackground from "../../assets/images/threeBackground.webp";

const { Step } = Steps;
const Three = () => {
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
                    HISTORY
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
                    发展历程
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
                  src={threeBackground}
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
            className="item item-comp wsite-text"
          >
            <Steps
              direction="vertical"
              style={{
                "--title-font-size": "12px",
                "--description-font-size": "8px",
                "--indicator-margin-right": "0px",
                "--icon-size": "22px",
              }}
            >
              <Step title="2006 ECVV创立公司" status="finish" />
              <Step title="2007 中东半岛电视台合作" status="finish" />
              <Step
                title="2010 入选《哈佛商业评论》企业案例集"
                status="finish"
              />
              <Step title="2015 创立小威外贸综合服务平台" status="finish" />
              <Step title="2016 国家发改委一带一路重点项目" status="finish" />
              <Step title="2017 荣获“国家技术先进型服务企业”" status="finish" />
              <Step
                title="2019 建立阿联酋迪拜本地仓，提供海外仓储服务"
                status="finish"
              />
              <Step
                title="2021 成立杭州华东运营中心"
                status="finish"
                description=""
              />
              <Step
                title="2023 ECVV建立沙特本地仓,提供面向沙特的本土化运营服务"
                status="finish"
              />
              <Step title="2023 荣获省级专精特新企业" status="finish" />
            </Steps>
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

export default Three;
