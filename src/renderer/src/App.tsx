import { Content, Layout, PreviewList, Sidebar } from '@/components'
import { ActionButtonsRow } from './components'

function App(): JSX.Element {
  return (
    <>
      {/* <DraggableTopBar /> */}
      <Layout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <PreviewList className="mt-3 space-y-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-800/50 border-l-white/20">Content</Content>
      </Layout>
    </>
  )
}

export default App
