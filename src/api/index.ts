/* eslint-disable no-unused-vars */
import { deleteFromAPI, getFromAPI, postToAPI } from '@/utils/fetch';
import {
  deleteFromLocalStorage,
  getFromLocalStorage,
  setToLocalStorage
} from '@/utils/localStorageUtils';

interface Storage {
  getItem(key: string, value: any): any;
  setItem(key: string, value: any): void;
  deleteItem(key: string): void;
}

class LocalStorageAdapter implements Storage {
  getItem(key: string, value: any) {
    return getFromLocalStorage(key, value);
  }

  setItem(key: string, value: any) {
    setToLocalStorage(key, value);
  }

  deleteItem(key: string) {
    deleteFromLocalStorage(key);
  }
}

export const localStorageAdapter = new LocalStorageAdapter();

class RestAPIAdapter implements Storage {
  async getItem(key: string, value: string) {
    return getFromAPI(`${key}/${value}`);
  }

  async setItem(key: string, value: any) {
    await postToAPI(key, value);
  }

  async deleteItem(key: string) {
    await deleteFromAPI(key);
  }
}

export const restAPIAdapter = new RestAPIAdapter();
