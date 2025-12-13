export interface OfflineContent {
  id: string;
  type: 'devotional' | 'pathway' | 'blog' | 'crisis';
  title: string;
  content: any;
  cachedAt: number;
}

export interface OfflineSubmission {
  id: string;
  type: 'prayer' | 'contact';
  data: any;
  timestamp: number;
}

const DB_NAME = 'ShameToFlameOffline';
const DB_VERSION = 1;
const CONTENT_STORE = 'content';
const SUBMISSIONS_STORE = 'submissions';

class OfflineStorageService {
  private db: IDBDatabase | null = null;

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        if (!db.objectStoreNames.contains(CONTENT_STORE)) {
          const contentStore = db.createObjectStore(CONTENT_STORE, { keyPath: 'id' });
          contentStore.createIndex('type', 'type', { unique: false });
        }

        if (!db.objectStoreNames.contains(SUBMISSIONS_STORE)) {
          db.createObjectStore(SUBMISSIONS_STORE, { keyPath: 'id' });
        }
      };
    });
  }

  async saveContent(content: OfflineContent): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([CONTENT_STORE], 'readwrite');
      const store = transaction.objectStore(CONTENT_STORE);
      const request = store.put(content);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async getContent(id: string): Promise<OfflineContent | null> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([CONTENT_STORE], 'readonly');
      const store = transaction.objectStore(CONTENT_STORE);
      const request = store.get(id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || null);
    });
  }

  async getContentByType(type: string): Promise<OfflineContent[]> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([CONTENT_STORE], 'readonly');
      const store = transaction.objectStore(CONTENT_STORE);
      const index = store.index('type');
      const request = index.getAll(type);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || []);
    });
  }

  async deleteContent(id: string): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([CONTENT_STORE], 'readwrite');
      const store = transaction.objectStore(CONTENT_STORE);
      const request = store.delete(id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async getAllContent(): Promise<OfflineContent[]> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([CONTENT_STORE], 'readonly');
      const store = transaction.objectStore(CONTENT_STORE);
      const request = store.getAll();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || []);
    });
  }

  async queueSubmission(submission: OfflineSubmission): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([SUBMISSIONS_STORE], 'readwrite');
      const store = transaction.objectStore(SUBMISSIONS_STORE);
      const request = store.put(submission);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async getPendingSubmissions(): Promise<OfflineSubmission[]> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([SUBMISSIONS_STORE], 'readonly');
      const store = transaction.objectStore(SUBMISSIONS_STORE);
      const request = store.getAll();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || []);
    });
  }

  async deleteSubmission(id: string): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([SUBMISSIONS_STORE], 'readwrite');
      const store = transaction.objectStore(SUBMISSIONS_STORE);
      const request = store.delete(id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async getStorageSize(): Promise<number> {
    const allContent = await this.getAllContent();
    const allSubmissions = await this.getPendingSubmissions();

    const contentSize = JSON.stringify(allContent).length;
    const submissionsSize = JSON.stringify(allSubmissions).length;

    return contentSize + submissionsSize;
  }
}

export const offlineStorage = new OfflineStorageService();
