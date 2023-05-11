import React, { useState } from "react";
import { Modal, Tabs } from "antd";
import Configuration from "../configuration";
import Chat from "../chat";
import BuildDragTitle from "../dragTitle";

function ContentModal(props) {
  const { setVisible, visible } = props;
  const [sharedData, setSharedData] = useState({});

  // 更新数据的函数
  const updateSharedData = (newValue) => {
    setSharedData(newValue);
  };

  const setVisibleHandler = () => {
    setVisible(false);
  }
  const customIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg>

  // Tabs
  const items = [
    {
      key: "1",
      label: `聊天`,
      children: <Chat promptData={sharedData}/>,
    },
    {
      key: "2",
      label: `配置`,
      children: <Configuration updateData={updateSharedData}/>,
    },
  ];

  return (
      <Modal
        title={<BuildDragTitle visible={visible} title="ONES Sql-helper" />}
        visible={visible}
        mask={false}
        onCancel={() => {
          setVisibleHandler()
        }}
        footer={false}
        width={360}
        className="M-root-modal"
        id="rootModal"
        closeIcon={customIcon}
        zIndex="99999"
        wrapClassName="M-root-modal-wappers"
      >
        <Tabs
          defaultActiveKey="1"
          items={items}
          centered
          size="small"
          tabBarGutter="0"
          animated={{ inkBar: true, tabPane: false }}
          className="M-tabs"
        />
      </Modal>
  );
}

export default ContentModal;