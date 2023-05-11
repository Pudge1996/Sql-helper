import React, { useState, useEffect } from "react";
import { ConfigProvider } from "antd";
import DragM from "dragm";

export default function BuildDragTitle(props) {
  const [modalDom, setModalDom] = useState(null);

  const updateTransform = transformStr => {
    modalDom.style.transform = transformStr;
  };

  useEffect(() => {
    console.log('modalDom useEffect');
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
}