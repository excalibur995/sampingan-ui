import { styled } from "stitches.config";
import { Root, Image, Fallback } from "@radix-ui/react-avatar";
import { avatarSize } from "./Avatar.types";

export const AvatarContainer = styled(Root, {
  flexCenter: "inital",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  backgroundColor: "$N400",
  cursor: "pointer",
  variants: {
    size: {
      sm: {
        size: avatarSize.sm,
      },
      md: {
        size: avatarSize.md,
      },
      lg: {
        size: avatarSize.lg,
      },
      xlg: {
        size: avatarSize.xlg,
      },
      hero: {
        size: avatarSize.hero,
      },
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

export const AvatarImage = styled(Image, {
  size: "100%",
  borderRadius: "inherit",
});
export const AvatarUsername = styled(Fallback, {
  flexCenter: "inital",
  backgroundColor: "white",
  color: "$B500",
  size: "100%",
});
