import "./eight.css";
import threeKong from "../../assets/images/threeKong.webp";
import three_blue_bottom from "../../assets/images/three_blue_bottom.webp";
import three_blue from "../../assets/images/three_blue.webp";
import eightWechat from "../../assets/images/eightWechat.webp";

const Eight = () => {
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
                    CALL ME
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
                    样例定制
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
              zIndex: 1,
              width: "315px",
              height: "500px",
              top: "120px",
              margin: "0 35px",
              textAlign: "center",
            }}
            className="list item-comp wsite-text"
          >
            <span
              style={{
                color: "rgb(19, 94, 153)",
                fontSize: " 26px",
                display: "block",
                marginBottom: "30px",
              }}
            >
              ECVV外贸综合服务平台
            </span>
            <span
              style={{
                color: "rgb(147,147,150)",
                fontSize: " 12px",
                display: "block",
                marginBottom: "30px",
              }}
            >
              联系QQ：3112371479
            </span>
            <span
              style={{
                color: "rgb(147,147,150)",
                fontSize: " 12px",
                display: "block",
                marginBottom: "30px",
              }}
            >
              微信号：ecvvictory
            </span>
            <span
              style={{
                width: "144px",
                height: "144px",
                border: "2px solid #ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
                marginBottom: "30px",
              }}
            >
              <img
                style={{
                  display: "block",
                  width: "124px",
                  height: "124px",
                  marginLeft: "-1px",
                  marginTop: "0px",
                }}
                src={eightWechat}
              />
            </span>
            <span
              style={{
                color: "rgb(147,147,150)",
                fontSize: " 12px",
                display: "block",
                marginBottom: "30px",
              }}
            >
              扫码添加微信
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

export default Eight;
