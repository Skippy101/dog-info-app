// utils/calculateAge.ts

/**
 * Calculate the age of a person given their date of birth.
 * @param {string} dob Date of birth in ISO format (YYYY-MM-DD)
 * @returns {string} The age of the person in years, months, and days
 * @example
 * calculateAge('2020-01-01') // '2 y, 3 m, 12 d'
 */
export function calculateAge(dob: string): string {
  const birthDate = new Date(dob);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust the months and years if the birth month or day hasn't occurred yet this year
  if (months < 0) {
    years--;
    months += 12;
  }

  if (days < 0) {
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
    days += lastMonth.getDate();
    months--;
  }

  // Format the output as "X years, Y months, Z days"
  return `${years} y, ${months} m, ${days} d`;
}
