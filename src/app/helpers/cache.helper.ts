import { Injectable } from '@angular/core';
import { Storage as IonicStorage } from '@ionic/storage-angular';

export class CacheResultModel<T> {
  value?: T;
  expired: boolean = false;
}
export class CacheHelperInitModel {}

@Injectable({
  providedIn: 'any',
})
export class CacheHelper {
  config: CacheHelperInitModel = {};

  constructor(private storage: IonicStorage) {}

  // for future changes
  private async fullKey(key: string, config?: CacheHelperInitModel) {}

  async set(
    key: string,
    value: any,
    ttlMin = 0,
    config?: CacheHelperInitModel
  ) {
    return this.storage.set(key, {
      value,
      expires: new Date().getTime() + ttlMin * 60 * 1000,
    });
  }

  async get<T>(
    key: string,
    config?: CacheHelperInitModel
  ): Promise<CacheResultModel<T>> {
    let result = await this.storage.get(key);
    return {
      value: result?.value,
      expired: !result?.value || result.expires < new Date().getTime(),
    };
  }

  async resetTtl(key: string, ttlMin = 0, config?: CacheHelperInitModel) {
    let result = await this.storage.get(key);
    if (result?.expired && ttlMin === 0) return;
    await this.set(key, result?.value, ttlMin, config);
  }
}
