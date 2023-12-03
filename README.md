# bun-spawn-bug-2

## To replicate:

```bash
bun install

# Note that this works as expected.
# The first counter ends when the app is killed
# and only the newly spawned counter is logged
bun ./src/watcher.ts

# Note that this runs the exact same script as
# above, but the first timer doesn't stop counting
bun run start
```

