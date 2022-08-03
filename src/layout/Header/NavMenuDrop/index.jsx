import { Col, Row } from "antd";
import React from "react";
import "./style.scss";

const NavMenuDrop = ({ list, imgRight }) => (
  <div className="nav-menu-drop">
    <Row className="item-drop-down">
      {list.map((item) => (
        <Col lg={6} key={item.title}>
          <div className="title">
            <a className="item-link" href="#!">
              {item.title}
            </a>
          </div>
          {item.items.map((value, index) => (
            <div className="item" key={index}>
              <a className="item-link" href="#!">
                {value.title}
              </a>
            </div>
          ))}
        </Col>
      ))}
    </Row>

    {imgRight && (
      <div className="banner">
        <img src={imgRight} alt="photo2" />
      </div>
    )}
  </div>
);

export default NavMenuDrop;
