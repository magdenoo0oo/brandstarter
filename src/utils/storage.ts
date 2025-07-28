import { BrandData, BrandIdentity } from '../types';

const STORAGE_KEY = 'brandstarter_data';

export function saveBrandData(data: BrandData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save brand data:', error);
  }
}

export function loadBrandData(): BrandData | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to load brand data:', error);
    return null;
  }
}

export function clearBrandData(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear brand data:', error);
  }
}