import {
  Content,
  FloatingNoteTitle,
  Layout,
  MarkdownEditor,
  PreviewList,
  Sidebar
} from '@/components'
import { useRef } from 'react'
import { ActionButtonsRow } from './components'

function App(): JSX.Element {
  const contentContainerRef = useRef<HTMLDivElement>(null)
  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
      {/* <DraggableTopBar /> */}
      <Layout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <PreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
        </Sidebar>
        <Content className="border-l bg-zinc-800/50 border-l-white/20">
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </Layout>
    </>
  )
}

export default App
