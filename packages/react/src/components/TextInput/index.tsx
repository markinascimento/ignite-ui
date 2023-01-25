import { ComponentProps } from 'react';

import { Input, Prefix, TextInputContainer } from './styles'

interface TextInputPops extends ComponentProps<typeof Input> {
  prefix?: string;
}

export function TextInput({ prefix, ...props }: TextInputPops) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix> {prefix} </Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
