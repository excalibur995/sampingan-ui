import React, { forwardRef } from "react";
import getUserInital from "../utils";
import { avatarSize, AvatarProps, defaultAvatarProps } from "./Avatar.types";
import { AvatarContainer, AvatarImage, AvatarUsername } from "./Avatar.styled";

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  (
    {
      id,
      alt,
      src,
      size,
      radius,
      elevation,
      objectFit,
      className,
      imageClassName,
      fallbackClassName,
      onClick,
      onLoadingStatusChange,
    },
    ref
  ) => {
    const fallbackFontSize =
      (avatarSize[size ?? defaultAvatarProps.size!] ?? 12) * 0.45;

    return (
      <AvatarContainer
        className={className}
        css={{
          borderRadius: `$${radius}`,
          boxShadow: `$${elevation}`,
        }}
        size={size}
        onClick={onClick}
      >
        <AvatarImage
          id={id}
          ref={ref}
          src={src}
          alt={alt}
          css={{
            objectFit,
          }}
          className={imageClassName}
          onLoadingStatusChange={onLoadingStatusChange}
        />
        <AvatarUsername
          css={{
            fontSize: fallbackFontSize,
          }}
          className={fallbackClassName}
        >
          {getUserInital(alt)}
        </AvatarUsername>
      </AvatarContainer>
    );
  }
);

const componentName = Avatar.displayName || Avatar.name;
Avatar.defaultProps = defaultAvatarProps;
Avatar.displayName = "Avatar" + "(" + componentName + ")";

export default Avatar;
