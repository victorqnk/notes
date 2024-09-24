import { ensureDir, readdir, readFile, stat } from 'fs-extra'
import { homedir } from 'node:os'
import { appDirectoryName, fileEncoding } from 'src/shared/constants'
import { NoteInfo } from 'src/shared/models'
import { GetNotes, ReadNote } from 'src/shared/types'

export const getRootDir = () => `${homedir()}/Projects/${appDirectoryName}`

export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir()
  console.log(rootDir)

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

export const readNote: ReadNote = async (fileName: string) => {
  const rootDir = getRootDir()
  return readFile(`${rootDir}/${fileName}.md`, { encoding: fileEncoding })
}
