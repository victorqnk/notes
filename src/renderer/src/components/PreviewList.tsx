import { NotePreview } from '@/components'
import { useNotesList } from '@/hooks/useNotesList'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const PreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  const { notes, selectedNoteIndex, handleNoteSelection } = useNotesList({})

  if (notes.length === 0)
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
