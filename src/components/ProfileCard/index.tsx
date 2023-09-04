import { RightOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import React from "react";

import DefaultImage from "../../assets/defaultImage.jpeg";
import { Container } from "./styles";

interface UserType {
  name: string;
  email: string;
  id: number;
  createdAt: string;
  image?: string;
  url?: string;
}

const ProfileCard: React.FC = () => {
  // get user from localStorage
  const json: any = localStorage.getItem("user");
  const user: UserType = JSON.parse(json);

  return (
    <Container>
      <img src={user.url ?? DefaultImage} alt={user.name} />
      <div className="text-area">
        <p>
          <strong>{user.name}</strong>
        </p>
        <p>
          <small>{user.email}</small>
        </p>
      </div>
      <div className="btn-area">
        <Popover
          placement="right"
          title={"profile"}
          content={<a href="/profile">Editar Perfil</a>}
          trigger="click"
        >
          <button
            type="button"
            style={{ background: "transparent", border: "none" }}
          >
            <RightOutlined />
          </button>
        </Popover>
      </div>
    </Container>
  );
};

export default ProfileCard;
