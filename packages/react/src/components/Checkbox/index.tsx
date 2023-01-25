import { ComponentProps } from 'react'

import { Check } from 'phosphor-react'

import { CheckboxContainer, CheckboxIndiciator } from './styles'

export interface CheckboxProps extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndiciator asChild>
        <Check weight='bold' />
      </CheckboxIndiciator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
