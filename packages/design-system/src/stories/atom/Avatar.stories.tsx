import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Avatar } from "../../components/Avatar";
import {
  AvatarProps,
  defaultAvatarProps as avatarDefaultProps,
  avatarSize,
  AvatarSizeType,
} from "../../components/Avatar";
import { styled } from "stitches.config";

const Wrapper = styled("div");

const Template: Story<AvatarProps> = (props) => <Avatar {...props} />;
const List: Story<AvatarProps> = (props) => {
  return (
    <Wrapper
      css={{
        placeItems: "end",
        equallyGridColumn: Object.keys(avatarSize).length,
      }}
    >
      {Object.keys(avatarSize).map((size) => (
        <Avatar
          id={`avatar--${size}`}
          key={size}
          size={size as AvatarSizeType}
          {...props}
        />
      ))}
    </Wrapper>
  );
};

export const WithImage = Template.bind({});
export const WithoutImage = Template.bind({});
export const onClickImage = Template.bind({});
export const AvatarList = List.bind({});

function onClick<T extends React.MouseEvent<HTMLSpanElement>>(event: T) {
  return alert((event.target as HTMLElement).id);
}

WithImage.args = {
  ...avatarDefaultProps,
  src: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
};

WithoutImage.args = {
  ...avatarDefaultProps,
};

onClickImage.args = {
  ...avatarDefaultProps,
  onClick,
};

AvatarList.args = {
  src: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
  onClick,
};

export default {
  title: "Atom/Avatar",
  component: Avatar,
} as Meta;
