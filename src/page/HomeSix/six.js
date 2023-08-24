import "./six.css";
import threeKong from "../../assets/images/threeKong.webp";
import three_blue_bottom from "../../assets/images/three_blue_bottom.webp";
import three_blue from "../../assets/images/three_blue.webp";
import sixBackground from "../../assets/images/sixBackground.jpg";
import six_one from "../../assets/images/six_one.webp";
import six_two from "../../assets/images/six_two.webp";
import six_three from "../../assets/images/six_three.webp";
import { Image, List } from "antd-mobile";
const Six = () => {
  const users = [
    {
      avatar: six_one,
      description: (
        <div>
          <div>中国代理采购</div>
          <div>工业品全球代理销售</div>
          <div>自营直接采购</div>
        </div>
      ),
    },
    {
      avatar: six_two,
      description: <div>中国供应商实地认证服务</div>,
    },
    {
      avatar: six_three,
      description: (
        <div>
          <div>ECVV进出口供应链服务</div>
          <div>提供清关、结汇、物流服务</div>
        </div>
      ),
    },
  ];
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
                    BUSINESS
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
                    主营业务
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
              height: "158px",
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
                    height: "158px",
                    marginLeft: "-0.131757px",
                  }}
                  className="element comp_image editable-image"
                  draggable="false"
                  src={sixBackground}
                />
              </div>
            </div>
          </li>
          <li
            style={{
              zIndex: 1,
              width: "375px",
              height: "500px",
              top: "260px",
            }}
            className="list item-comp wsite-text"
          >
            <List>
              {users.map((user, index) => (
                <List.Item
                  key={index}
                  style={{
                    "--border-bottom": "none",
                    "--border-inner": "none",
                    "--border-top": "none",
                    margin: "0 30px 10px 30px",
                    backgroundColor: "#d7e8f2",
                    padding: "0",
                  }}
                  prefix={
                    <Image
                      src={user.avatar}
                      fit="cover"
                      width={86.5}
                      height={80}
                    />
                  }
                  description={user.description}
                ></List.Item>
              ))}
            </List>
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

export default Six;
