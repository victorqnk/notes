import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { NotePreview } from '@/components'
import { useNotesList } from '@/hooks/useNotesList'
import { isEmpty } from 'lodash'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const PreviewList = ({ onSelect, className, ...props }: NotePreviewListProps) => {
  const { notes, selectedNoteIndex, handleNoteSelection } = useNotesList({ onSelect })

  if (!notes) return null

  if (isEmpty(notes))
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No notes yet!</span>
      </ul>
    )

  return (
    <ul className={className} {...props}>
      {notes.map((note, index) => (
        <NotePreview
          isActive={selectedNoteIndex === index}
          onClick={handleNoteSelection(index)}
          key={note.title}
          {...note}
        />
      ))}
    </ul>
  )
}
