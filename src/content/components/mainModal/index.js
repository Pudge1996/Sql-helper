import { Modal, ConfigProvider, Tabs } from "antd";
import Configuration from "../configuration";
import Chat from "../chat";
// import { apiReqs } from '@/api'
import "./mainModal.styl";

function MainModal(props) {
  // 接收父组件控制本组件关闭的方法
  const { onClose } = props;

  // Tabs
  const onChange = (key) => {
    console.log(key);
  };
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

  // 弹窗的关闭图标
  const customIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg>

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
      <Modal
        className="CRX-mainModal"
        open={true}
        title={"SQL-Helper"}
        footer={null}
        maskClosable={false}
        onCancel={() => {
          onClose && onClose();
        }}
        width={360}
        mask={false}
        centered
        closeIcon={customIcon}
        // transitionName=""
      >
        <Tabs
          defaultActiveKey="1"
          items={items}
          centered
          onChange={onChange}
          size="small"
          tabBarGutter="0"
          animated={{ inkBar: true, tabPane: false }}
        />
      </Modal>
    </ConfigProvider>
  );
}

export default MainModal;
