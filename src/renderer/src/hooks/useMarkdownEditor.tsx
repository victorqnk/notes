import { useRef } from 'react'

import { useAtomValue, useSetAtom } from 'jotai'
import { throttle } from 'lodash'

import { saveNoteAtom, selectedNoteAtom } from '@/store'
import { MDXEditorMethods } from '@mdxeditor/editor'
import { autoSavingTime } from '@shared/constants'
import { NoteContent } from '@shared/models'

export const useMarkdownEditor = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  const saveNote = useSetAtom(saveNoteAtom)
  const editorRef = useRef<MDXEditorMethods>(null)

  const handleAutoSaving = throttle(
    async (content: NoteContent) => {
      if (!selectedNote) return
      console.info('Auto saving', selectedNote.title)
      await saveNote(content)
    },
    autoSavingTime,
    {
      leading: false,
      trailing: true
    }
  )

  const handleBlur = async () => {
    if (!selectedNote) return
    handleAutoSaving.cancel()

    const content = editorRef.current?.getMarkdown()
    if (content != null) await saveNote(content)
  }

  return {
    editorRef,
    handleAutoSaving,
    selectedNote,
    handleBlur
  }
}
