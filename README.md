# STREET RUSH: Open City

A free-roam 3D city game for phone and desktop browsers. It's plain static files with no backend.

**Play:** https://daneweslycuellar-cpu.github.io/street-rush/
(The old lane runner is still at /runner.html)

## Controls
- Left side of the screen: drag to move (joystick). Right side: drag to look around.
- On foot: JUMP, hold RUN. Next to any car, tap ENTER CAR.
- In a car: stick up = gas, down = brake/reverse, left/right = steer. BRAKE = handbrake, HORN = beep.
- Keyboard: WASD/arrows, mouse drag, Space, Shift, E (enter/exit), H (horn), M (phone menu).

Things to do: delivery jobs (yellow beams), a street race (green beam), 40 hidden coins, and buying/calling cars from the phone menu.
Progress saves in the browser's localStorage.

## Updating
1. Edit `src/main.js` (and `index.html` for the HUD/menus). Bump `VERSION` in `src/main.js` and the `?v=` in index.html.
2. Rebuild: `npx esbuild src/main.js --bundle --minify --format=esm --target=safari15 --outfile=game.js`
3. Commit and push to `main`. GitHub Pages republishes in about a minute. The phone menu shows the version.
