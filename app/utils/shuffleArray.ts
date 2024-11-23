/**
 * Shuffles an array in-place using a seeded random number generator.
 *
 * This function uses the Fisher-Yates shuffle algorithm and returns a new array
 * which is a shuffled copy of the original array.
 *
 * @param array The array to shuffle.
 * @param seed A seed for the random number generator.
 * @returns A new, shuffled array with the same elements as the original array.
 */
export default function shuffleArray<T>(array: T[], seed: number): T[] {
  // Seeded RNG function
  function seededRandom(seed: number) {
    let s = seed % 2147483647;
    return () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646; // Normalized to [0, 1)
    };
  }

  const rng = seededRandom(seed);
  const shuffled = [...array]; // Create a copy of the array to avoid modifying the original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(rng() * (i + 1)); // Generate a seeded random index
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]]; // Swap elements
  }
  return shuffled;
}
