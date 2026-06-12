export function formatRating(rating: number) {
  return `${rating.toFixed(1)}/5`;
}

export function percent(score: number) {
  return `${Math.round(score * 10)}%`;
}
