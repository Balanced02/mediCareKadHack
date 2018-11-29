import React from "react";
import basicStyle from "../config/basicStyle";

import { Row, Col, Card, Icon } from "antd";

export default ({ data, searching }) => {
  const { rowStyle, colStyle } = basicStyle;

  return (
    <Row style={rowStyle} gutter={3} justify="start">
      <Col span={6} md={6} sm={12} xs={24} style={colStyle}>
        <Card loading={searching} style={{ backgroundColor: "#ff4d4f" }}>
          <span
            className="fa fa-user fa-4x"
            style={{ float: "right" }}
          />
          <h4>{866}</h4> <p> Patients</p>
        </Card>
      </Col>
      <Col span={6} md={6} sm={12} xs={24} style={colStyle}>
        <Card loading={searching} style={{ backgroundColor: "#52c41a" }}>
          <span
            className="fa fa-bed fa-4x"
            style={{ float: "right" }}
          />
          <h4>{32}</h4>
          <p> Free Bed Spaces </p>
        </Card>
      </Col>
      <Col span={6} md={6} sm={12} xs={24} style={colStyle}>
        <Card loading={searching} style={{ backgroundColor: "#1890ff" }}>
          <span className="fa fa-users fa-4x" style={{ float: "right" }} />
          <h4>{62}</h4>
          <p> Daily Average Patients </p>
        </Card>
      </Col>
      <Col span={6} md={6} sm={12} xs={24} style={colStyle}>
        <Card loading={searching} style={{ backgroundColor: "#ffc53d" }}>
          <span className="fa fa-envelope fa-4x" style={{ float: "right" }} />
          <h4>{4}</h4>
          <p> Unread Messages </p>
        </Card>
      </Col>
    </Row>
  );
};
