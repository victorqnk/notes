import { useSetAtom } from 'jotai'
import { FaRegTrashCan } from 'react-icons/fa6'

import { ActionButton, ActionButtonProps } from '@/components'
import { deleteNoteAtom } from '@/store'

export const DeleteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)
  return (
    <ActionButton onClick={() => deleteNote()} {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
