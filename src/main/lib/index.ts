import { ensureDir, readdir, stat } from 'fs-extra'
import { homedir } from 'node:os'
import { appDirectoryName, fileEncoding } from 'src/shared/constants'
import { NoteInfo } from 'src/shared/models'
import { GetNotes } from 'src/shared/types'

export const getRootDir = () => `${homedir()}/${appDirectoryName}`

export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir()
  await ensureDir(rootDir)

  const notesFileNames = await readdir(rootDir, {
    encoding: fileEncoding,
    withFileTypes: false
  })

  const notes = notesFileNames.filter((filename) => filename.endsWith('.md'))

  return Promise.all(notes.map(getNoteInfoFromFileName))
}

export const getNoteInfoFromFileName = async (fileName: string): Promise<NoteInfo> => {
  const fileStats = await stat(`${getRootDir()}/${fileName}`)

  return {
    title: fileName.replace(/\.md$/, ''),
    lastEditTime: fileStats.mtimeMs
  }
}
