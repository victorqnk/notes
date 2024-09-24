import { useSetAtom } from 'jotai'
import { LuFileSignature } from 'react-icons/lu'

import { ActionButton, ActionButtonProps } from '@/components'
import { createEmptyNoteAtom } from '@/store'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  return (
    <ActionButton onClick={async () => await createEmptyNote()} {...props}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
