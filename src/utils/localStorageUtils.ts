export type DeserializedValue = string | number | boolean | any[] | Record<string, any>;
export type SerializedValue = DeserializedValue;

function serializeValue(value: SerializedValue): string {
  return typeof value === 'object' ? JSON.stringify(value) : `${value}`;
}

function deserializeValue<T extends DeserializedValue>(
  str: string | null | undefined
): T | null {
  if (!str) {
    return null;
  }
  try {
    return JSON.parse(str);
  } catch {
    return str as unknown as T;
  }
}

export function getFromLocalStorage<T extends DeserializedValue>(
  key: string,
  defaultValue: T
): T {
  const value = localStorage.getItem(key);
  if (value === null) {
    return defaultValue;
  }
  const parsedValue = deserializeValue<T>(value);
  return parsedValue !== null ? parsedValue : defaultValue;
}

export function setToLocalStorage<T extends SerializedValue>(
  key: string,
  value: T
): void {
  try {
    const serializedValue = serializeValue(value);
    localStorage.setItem(key, serializedValue);
    window.dispatchEvent(
      new CustomEvent('storageCustom', { detail: { key, value: serializedValue } })
    );
  } catch (err) {
    console.error(err);
  }
}

export function deleteFromLocalStorage(key: string): void {
  try {
    localStorage.removeItem(key);
    window.dispatchEvent(new CustomEvent('storageCustom', { detail: { key } }));
  } catch (err) {
    console.error(err);
  }
}
