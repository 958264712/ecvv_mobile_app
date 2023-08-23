import React from "react";
import { Swiper } from "antd-mobile";
import One from "./HomeOne/one";
import Two from "./HomeTwo/two";
import Three from "./HomeThree/three";
import Four from "./HomeFour/four";
import Five from "./HomeFive/five";
import Six from "./HomeSix/six";
import Seven from "./HomeSeven/seven";
import Eight from "./HomeEight/eight";
import "./index.css";

const list = [<One />,<Two/>,<Three/>,<Four/>,<Five/>,<Six/>,<Seven/>,<Eight/>];
const verticalItems = list.map((item, index) => (
  <Swiper.Item key={index}>{item}</Swiper.Item>
));

const Layout = () => {
    return (
      <Swiper
        className="swiper"
        direction="vertical"
        loop='true'
        style={{ "--height": "100vh" }}
        indicator={(total, current) => (
          <div className="customIndicator">{`${current + 1} / ${total}`}</div>
        )}
      >
        {verticalItems}
      </Swiper>
    );
};

export default Layout;
