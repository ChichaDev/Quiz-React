import { getFromLocalStorage } from './getFromLocalStorage';

// Функция для конвертации массива объектов в CSV формат
export function convertToCSV(data: any[]): string {
  const header = Object.keys(data[0]).join('\t') + '\n';

  const rows = data
    .map((row) =>
      Object.values(row)
        .map((value) => `${value}`)
        .join('\t')
    )
    .join('\n');

  return header + rows;
}

// Функция для скачивания CSV файла
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

// Функция для получения и конвертации данных из localStorage в CSV
export function convertLocalStorageToCSV(key: string, fileName: string) {
  // Получаем данные из localStorage
  const existingResults = getFromLocalStorage(key, []);

  // Преобразуем данные в формат CSV
  const csvContent = convertToCSV(existingResults);

  // Скачиваем CSV файл
  downloadCSV(csvContent, fileName);
}
