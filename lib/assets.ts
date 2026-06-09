import manifest from "@/content/asset-manifest.json";

type Manifest = {
  images?: Record<string, string>;
  videos?: Record<string, string>;
  frames?: Record<string, string[]>;
};

const m = manifest as Manifest;

/** Resolve a generated image URL by slot, falling back to a local path. */
export function imageSlot(slot: string, fallback = ""): string {
  return (m.images && m.images[slot]) || fallback;
}

/** Resolve a generated video URL by slot. */
export function videoSlot(slot: string, fallback = ""): string {
  return (m.videos && m.videos[slot]) || fallback;
}
