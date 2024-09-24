import { notesMock } from '@renderer/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { NotePreview } from './Preview'

export const PreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  if (notesMock.length === 0)
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No notes yet!</span>
      </ul>
    )

  return (
    <ul className={className} {...props}>
      {notesMock.map((note) => (
        <NotePreview {...note} key={note.title} />
      ))}
    </ul>
  )
}
