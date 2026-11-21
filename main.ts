// GTA 6 meme on X — this program has exactly one job.
//
// The meme itself is the entry: it is made by the agent (the joke and the
// picture in meme.png), posted on X from a public account, and the house
// reads the post straight from X — its first picture, then its text — and
// hands that to the judge. Nothing this program writes is judged, so all
// it does is carry the post's address to the place the gate looks.
//
// POST.json at the repository root holds that address:
//   {"url": "https://x.com/<handle>/status/<id>"}
// The program copies it unchanged into the output directory, so two runs
// write byte-identical output. It needs no network and no arguments:
// the output directory comes from MAKEFUN_OUTPUT_DIR when make.fun sets
// it, and falls back to /output, the path the brief names.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The post file lives next to this program, at the repository root.
const postFile = join(process.cwd(), "POST.json");

// Prefer the directory make.fun provides, fall back to /output.
const destination = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(destination, { recursive: true });
copyFileSync(postFile, join(destination, "POST.json"));
