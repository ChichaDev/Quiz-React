import { getFromLocalStorage } from './localStorageUtils';

// prettier-ignore
export function convertToCSV(data: any[]): string {
  const header = Object.keys(data[0]).join('\t') + '\n';

  const rows = data
    .map((row) => Object.values(row)
        .map((value) => `${value}`)
        .join('\t')
    )
    .join('\n');

  return header + rows;
}

export function downloadCSV(csvContent: string, fileName: string) {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.style.display = 'none';
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

export function convertLocalStorageToCSV(key: string, fileName: string) {
  const existingResults = getFromLocalStorage(key, []);

  const csvContent = convertToCSV(existingResults);

  downloadCSV(csvContent, fileName);
}
