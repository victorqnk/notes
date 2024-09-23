import { ComponentProps } from 'react'
import { DeleteButton } from './DeleteButton'
import { NewNoteButton } from './NewNoteButton'

export const ActionButtonsRow = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteButton />
    </div>
  )
}
