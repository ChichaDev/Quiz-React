/* eslint-disable no-unused-vars */
import { deleteFromAPI, getFromAPI, postToAPI } from '@/utils/fetch';
import {
  deleteFromLocalStorage,
  getFromLocalStorage,
  setToLocalStorage
} from '@/utils/localStorageUtils';

export interface Storage {
  getItem(key: string): any;
  setItem(key: string, value: any): void;
  deleteItem(key: string): void;
}

export interface RemoteClient {
  get(endpoint: string): Promise<any>;
  post(endpoint: string, data: any): Promise<any>;
  delete(endpoint: string): Promise<boolean>;
}

export class LocalStorageAdapter implements Storage {
  getItem(key: string) {
    return getFromLocalStorage(key, '');
  }

  setItem(key: string, value: any) {
    setToLocalStorage(key, value);
  }

  deleteItem(key: string) {
    deleteFromLocalStorage(key);
  }
}
export class RestAPIAdapter implements RemoteClient {
  async get(endpoint: string) {
    return getFromAPI(endpoint);
  }

  async post(endpoint: string, data: any) {
    return postToAPI(endpoint, data);
  }

  async delete(endpoint: string) {
    return deleteFromAPI(endpoint);
  }
}

export interface QuizRepository {
  fetchQuizData(key: string): any;
  saveQuizData(key: string, data: any): void;
  deleteQuizData(key: string): void;
}

export class StorageQuizRepository implements QuizRepository {
  constructor(private storage: Storage) {}

  fetchQuizData(key: string) {
    return this.storage.getItem(key);
  }

  saveQuizData(key: string, data: any) {
    this.storage.setItem(key, data);
  }

  deleteQuizData(key: string) {
    this.storage.deleteItem(key);
  }
}

export class RemoteQuizRepository implements QuizRepository {
  constructor(private client: RemoteClient) {}

  async fetchQuizData(endpoint: string) {
    return this.client.get(endpoint);
  }

  async saveQuizData(endpoint: string, data: any) {
    return this.client.post(endpoint, data);
  }

  async deleteQuizData(endpoint: string) {
    return this.client.delete(endpoint);
  }
}
