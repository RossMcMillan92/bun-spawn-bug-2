import type { Subprocess } from "bun"
import { join } from "path"

async function startApp() {
  global.console.log("Starting app...")
  const path = join(process.cwd(), "src/timeout.ts")
  return Bun.spawn(["bun", path], { stdout: "inherit" })
}

async function kill(process: Subprocess) {
  global.console.log("Killing app...")
  process.kill()
  await process.exited
}

const startupProcess = { current: await startApp() }

console.log("Waiting for 2 secs")
await Bun.sleep(2000)

console.log("Waited for 2 secs. Exiting...")
await kill(startupProcess.current)
startupProcess.current = await startApp()
