// Interfaces with unique "brand" properties to create distinct types.
interface MajorCredits {
  credits: number;
  _brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  _brand: 'MinorCredits';
}

/**
 * Sums the credits of two MajorCredits subjects.
 * @param subject1 The first MajorCredits subject.
 * @param subject2 The second MajorCredits subject.
 * @returns A new MajorCredits object with the combined credits.
 */
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'MajorCredits',
  };
}

/**
 * Sums the credits of two MinorCredits subjects.
 * @param subject1 The first MinorCredits subject.
 * @param subject2 The second MinorCredits subject.
 * @returns A new MinorCredits object with the combined credits.
 */
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'MinorCredits',
  };
}