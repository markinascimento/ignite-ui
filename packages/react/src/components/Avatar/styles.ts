import * as Avatar from '@radix-ui/react-avatar';

import { styled } from "@stitches/react";

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline',
  width: '$12',
  height: '$12',
  overflow: 'hidden'
});

export const AvatarImage = styled(Avatar.AvatarImage, {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  borderRadius: 'inherit'
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6'
  }
})
