import { format } from 'date-fns';

export function formatDate(date: Date, formatString: string = 'dd MMM'): string {
  return format(date, formatString);
}

export function getCurrentTimestamp(): Date {
  return new Date();
}