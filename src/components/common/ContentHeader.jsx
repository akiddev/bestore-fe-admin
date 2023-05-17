import { PageHeader } from "@ant-design/pro-layout";
import { Divider } from "antd";
import React, { Component } from "react";

export default class ContentHeader extends Component {
  render() {
    const { navigate, title, className } = this.props;
    return (
      <>
        <PageHeader
          className={className}
          onBack={() => navigate(-1)}
          title={title}
          style={{ marginLeft: 0 }}
        ></PageHeader>

        <Divider></Divider>
      </>
    );
  }
}
