import Configuration from "../configuration";
import { Input, Modal, Select, ConfigProvider, Tabs } from "antd";
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
      children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: `配置`,
      children: <Configuration />,
    },
  ];

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
          colorText: "#303030",
          colorTextSecondary: "#606060",
          colorTextTertiary: "#909090",
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
        title={"CRX对话框"}
        footer={null}
        maskClosable={false}
        onCancel={() => {
          onClose && onClose();
        }}
        width={320}
        mask={false}
      >
        <Tabs
          defaultActiveKey="1"
          items={items}
          centered
          onChange={onChange}
          size="small"
        />
      </Modal>
    </ConfigProvider>
  );
}

export default MainModal;
