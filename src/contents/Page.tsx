import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { CodeEditor } from "./CodeEditor"
import { Input } from "./Input"
import { Output } from "./Output"

export function Page() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={60} className="h-screen">
        <div className="flex p-6">
          <CodeEditor />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={40}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full p-6">
            <Input/>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full p-6">
            <Output/>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
