import React, { useState, useRef, useEffect } from "react";
import { Modal, ConfigProvider, Tabs } from "antd";
import Configuration from "../configuration";
import Chat from "../chat";
import DragM from "dragm";
// import { apiReqs } from '@/api'

function BuildTitle(props) {
  const [modalDom, setModalDom] = useState(null);

  const updateTransform = transformStr => {
    modalDom.style.transform = transformStr;
  };

  useEffect(() => {
    const modalElement = document.getElementsByClassName("ant-modal-wrap")[0];
    setModalDom(modalElement);
  }, []);

  return (
    <ConfigProvider
      autoInsertSpaceInButton={false}
      theme={{
        token: {
          colorPrimary: "#0064ff",
          colorPrimaryHover: "#226AFF",
          colorPrimaryActive: "#0032BE",
          colorSuccess: "#00be5e",
          colorWarning: "#ffaa33",
          colorError: "#ff4433",
          colorInfo: "#0064ff",
          colorText: "#16171A",
          colorTextSecondary: "#2B2C2F",
          colorTextTertiary: "#696A6D",
          colorBorder: "#c7c7c7",
          colorBgMask: "rgba(48, 48, 48, 0.5)",
          borderRadius: 3,
          sizeStep: 5,
          sizeUnit: 5,
          wireframe: false,
        },
      }}
    >

    <DragM  updateTransform={updateTransform} >
      <div>{props.title}</div>
    </DragM>
    </ConfigProvider>
  );

  // 弹窗的关闭图标
  const customIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg>
}

function App() {
  // Tabs
  const items = [
    {
      key: "1",
      label: `聊天`,
      children: <Chat />,
    },
    {
      key: "2",
      label: `配置`,
      children: <Configuration />,
    },
  ];

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = e => {
    setVisible(false);
  };
  

  const title = <BuildTitle visible={visible} title="Modal Title" />;

  return (
      <Modal
        title={title}
        open={true}
        visible={visible}
        mask={false}
        onOk={() => setVisible(false)}
        onCancel={handleCancel}
        footer={false}
        width={360}
        className="M-root-modal"
        id="rootModal"
        // closeIcon={customIcon} 这个也得传进来，很关键
        zIndex="99999"
        wrapClassName="root-modal-wrap"
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

export default App;