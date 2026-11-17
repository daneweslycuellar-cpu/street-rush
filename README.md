# STREET RUSH: Open City

A GTA-style open-world crime sandbox that runs in the browser (iPhone Safari/Chrome and desktop). Plain static files, no backend.

**Play:** https://daneweslycuellar-cpu.github.io/street-rush/

## What's in it
- Fist fights with combos, carjacking, store robberies, 1–5 star wanted level, police cars that ram, cops on foot, a helicopter, BUSTED / WASTED
- Story missions (Vinny "The Fish") with a choice that changes the ending, street races vs AI (Lucia), pizza runs (Big Tony), a secret night-time Stranger
- Random events: police chases, armored trucks, muggings, gang fights, street-race challenges, street brawls, a rare gold car, a mysterious ice cream truck
- Drifting, nitro, near-miss bonuses, stunt ramps with slow motion
- Properties that earn money (even while you're away), garage, chop shop, car collection with secret cars, taxi job
- Rank/XP, skills that improve with use, achievements, hidden stashes
- Day/night cycle, rain, five districts (Downtown, Little Havana, Uptown, Old Town, The Docks) with two gangs

Progress saves in the browser's localStorage.

## Code
- `src/world.js` – city generation, districts, landmarks, day/night, weather
- `src/people.js` – pedestrians, cops, gangs, combat
- `src/vehicles.js` – cars, driving physics, traffic/police/racer AI, helicopter, particles
- `src/game.js` – player, wanted system, missions, events, economy, HUD, phone UI
- `game.js` – the bundled build that `index.html` loads

## Updating
1. Edit files in `src/` (and `index.html` for HUD/menus). Bump `VERSION` in `src/game.js` and the `?v=` in `index.html`.
2. Build: `npx esbuild src/game.js --bundle --minify --format=esm --target=safari15 --alias:three=./lib/three.module.js --outfile=game.js`
3. Commit and push to `main`. GitHub Pages republishes in about a minute.
