import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const stringToDate = (taskDates: string[]) => {
  return taskDates.map((date) => new Date(date));
};
