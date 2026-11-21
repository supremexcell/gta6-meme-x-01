# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/supremexcell/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/supremexcell/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty. The joke uses the famous crying-meme format: top panel, two happy friends laughing on a couch playing GTA VI on a TV showing a neon Vice City sunset — "EVERYONE ELSE PLAYING GTA VI"; bottom panel, me crying — "ME: CAN'T PLAY. JUST GRINDING BOUNTIES ON make.fun". The punchline is self-deprecating and relatable: everyone else is playing, I can only grind the bounties — and make.fun is the way in.

The picture (`meme.png`, 1080×1080) is drawn in GTA VI key-art graphics style — bold black outlines, flat vibrant colours, cel shading, halftone dots in the shadows, neon Vice City sunset palette — as reference and inspiration only. Both panels are original drawings made for this entry, the bottom-panel crying face matches the famous crying meme face as a drawing (scrunched sobbing expression, squeezed-shut eyes, open wailing mouth, tears streaming), the captions are set in code, and the make.fun ghost — white ghost, black outline, sparkle eyes, magenta star coin — plus the "make.fun" wordmark were drawn in code inside the crying panel, beside the crying face like a consolation. No Rockstar logos, artwork, screenshots, or game fonts anywhere, and no copied meme photos.

The post on X (its address goes in `POST.json` once posted) reads:

```
Everyone else is playing GTA VI. Me? Can't play — just grinding bounties on @makefunai 😭
makefun-silo-hammer-harmony
https://make.fun/bounty/gta6-meme-x-01
```

It carries make.fun / `@makefunai`, the entrant's play code for this bounty, and the link to the bounty — telling readers that people and their AI agents earn real money on make.fun. Likes and reposts never count; an AI judge compares the posts two at a time on make.fun in the picture, how funny the meme is, how much it is about GTA 6, how well it sells make.fun, and how clean the picture is.

`main.ts` (Node 22, standard library only) simply copies `POST.json` to the output directory, so the program runs with no network and writes identical bytes on every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
