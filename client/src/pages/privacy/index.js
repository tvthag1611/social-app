import React, { useState } from "react";
import { Button, Dropdown } from "antd";
import { Avatar, List } from "antd";

const PrivacyPage = () => {
  const items = [
    {
      key: "1",
      label: "Everyone",
    },
    {
      key: "2",
      label: "Only followers",
    },
    {
      key: "3",
      label: "Close friends",
    },
  ];

  const [selectedKey1, setSelectedKey1] = useState("1");
  const [selectedKey2, setSelectedKey2] = useState("1");
  const handleMenuSelect1 = ({ key }) => {
    setSelectedKey1(key);
  };
  const handleMenuSelect2 = ({ key }) => {
    setSelectedKey2(key);
  };

  const blockedUsers = [
    {
      id: 1,
      name: "Lily",
    },
    {
      id: 2,
      name: "Lilo",
    },
  ];

  return (
    <div className="flex flex-col space-y-10 w-2/5 mt-52 ml-auto mr-20">
      <section className="space-y-5">
        <p className="flex justify-between">
          <span>Who can view my profile?</span>
          <Dropdown
            menu={{
              items,
              selectable: true,
              onSelect: handleMenuSelect1,
            }}
            placement="bottomRight"
            arrow
          >
            <Button className="px-0 w-40">
              {items.find((item) => item.key === selectedKey1)?.label}
            </Button>
          </Dropdown>
        </p>

        <p className="flex justify-between">
          <span>Who can like/comment/share my posts?</span>
          <Dropdown
            menu={{
              items,
              selectable: true,
              onSelect: handleMenuSelect2,
            }}
            placement="bottomRight"
            arrow
          >
            <Button className="px-0 w-40">
              {items.find((item) => item.key === selectedKey2)?.label}
            </Button>
          </Dropdown>
        </p>
      </section>

      <hr className="border-b-0 border-gray-300"></hr>

      <span>Blocked users ({blockedUsers.length})</span>

      <List
        dataSource={blockedUsers}
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[<Button key={`a-${item.id}`}>Unblock</Button>]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
              }
              title={<a href="#">{item.name}</a>}
              description="10 posts, 2 followers"
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default PrivacyPage;
