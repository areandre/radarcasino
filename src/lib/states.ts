import rawStates from "@/content/states.json";

export type StateInfo = {
  slug: string;
  code: string;
  name: string;
};

export const states = rawStates as StateInfo[];

export function getStateBySlug(slug: string) {
  return states.find((state) => state.slug === slug);
}
