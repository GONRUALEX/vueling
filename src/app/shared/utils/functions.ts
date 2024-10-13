export function generateRandomKey(length: number): string {
    return Array(length)
      .fill(0)
      .map(() => Math.random().toString(36).charAt(2)) 
      .join('');
  }