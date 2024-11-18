/**
 * Shuffles an array in-place.
 *
 * This function uses the Fisher-Yates shuffle algorithm and returns a new array
 * which is a shuffled copy of the original array.
 *
 * @param array The array to shuffle.
 * @returns A new, shuffled array with the same elements as the original array.
 */
export default function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]; // Create a copy of the array to avoid modifying the original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1)); // Generate a random index
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]]; // Swap elements
  }
  return shuffled;
}
