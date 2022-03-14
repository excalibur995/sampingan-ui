import { RadiiTypes, ShadowType } from "@sampingan-ui/core";
import React from "react";
import { GeneralProperties } from "sampingan-types";

export interface AvatarProps extends GeneralProperties {
  /**
   * Specifies the path to the image
   */
  src?: string;
  /**
   * Specifies an alternate text for an image
   */
  alt: string;
  /**
   * Specifies the size of avatar
   */
  size?: AvatarSizeType;
  /**
   * Specifies the radius of avatar container
   */
  radius?: RadiiTypes;
  /**
   * indicates like how far card from the ground
   */
  elevation?: ShadowType;
  /**
   * a Class for `img` attribute
   */
  imageClassName?: string;
  /**
   * a Class for Text-Only avatar
   */
  fallbackClassName?: string;
  /**
   * action when click the avatar
   */
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
  /**
   * property is used to specify how an image should be resized to objectFit its container.
   */
  objectFit?:
    | "fill"
    | "contain"
    | "cover"
    | "none"
    | "scale-down"
    | "contain"
    | "inherit";
  /**
   * A callback providing information about the loading status of the image.
   * This is useful in case you want to control more precisely what to render as the image is loading.
   */
  onLoadingStatusChange?: (
    status: "idle" | "loading" | "loaded" | "error"
  ) => void;
}

export const avatarSize = {
  sm: 16,
  md: 32,
  lg: 40,
  xlg: 96,
  hero: 128,
};

export type AvatarSize = typeof avatarSize;
export type AvatarSizeType = keyof typeof avatarSize;

export const defaultAvatarProps: AvatarProps = {
  id: "Sampingan--Avatar--lg",
  className: "Sampingan--Avatar--lg--className",
  alt: "Sampingan UI",
  size: "lg",
  objectFit: "cover",
  radius: "rounded",
  elevation: "interactive",
  onClick: () => null,
  onLoadingStatusChange: () => null,
};
