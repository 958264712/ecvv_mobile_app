import "./seven.css";
import threeKong from "../../assets/images/threeKong.webp";
import three_blue_bottom from "../../assets/images/three_blue_bottom.webp";
import three_blue from "../../assets/images/three_blue.webp";
import sevenBackground from "../../assets/images/sevenBackground.webp";

const Seven = () => {
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
                    CONTACT
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
                    联系我们
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
              height: "205px",
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
                    height: "135px",
                    marginLeft: "-0.131757px",
                  }}
                  className="element comp_image editable-image"
                  draggable="false"
                  src={sevenBackground}
                />
              </div>
            </div>
          </li>
          <li
            style={{
              zIndex: 1,
              width: "315px",
              height: "500px",
              top: "270px",
              margin: "0 35px",
              textAlign: "left",
            }}
            className="list item-comp wsite-text"
          >
            <span
              style={{
                color: "rgb(129, 133, 135)",
                fontSize: " 16px",
                display: "block",
                marginBottom: "10px",
              }}
            >
              深圳伊西威威网络科技股份有限公司
            </span>
            <span
              style={{
                color: "rgb(129, 133, 135)",
                fontSize: " 16px",
                display: "block",
                marginBottom: "10px",
              }}
            >
              地址：深圳市福田区莲花街道福中社区金田路4028号荣超经贸中心B2310
            </span>
            <span
              style={{
                color: "rgb(129, 133, 135)",
                fontSize: " 16px",
                display: "block",
                marginBottom: "10px",
              }}
            >
              电话：0755-82468418
            </span>
            <span
              style={{
                color: "rgb(129, 133, 135)",
                fontSize: " 16px",
                marginBottom: "10px",
                display: "block",
              }}
            >
              邮箱：support@ecvv.com
            </span>
            <span
              style={{
                color: "rgb(129, 133, 135)",
                fontSize: " 16px",
                marginBottom: "10px",
                display: "block",
              }}
            >
              B2B代采平台：www.evvv.com
            </span>
            <span
              style={{
                color: "rgb(129, 133, 135)",
                marginBottom: "10px",
                fontSize: " 16px",
                display: "block",
              }}
            >
              工品自营平台：mro.ecvv.com
            </span>
            <span
              style={{
                color: "rgb(129, 133, 135)",
                fontSize: " 16px",
                marginBottom: "10px",
                display: "block",
              }}
            >
              进出口服务：www.12400.cn
            </span>
          </li>
        </ul>
      </div>
      <section className="u-arrow-bottom" style={{ bottom: "50px" }}>
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

export default Seven;
