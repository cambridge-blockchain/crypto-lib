import { Config } from './config';

export class CBCWebCrypto {
  private cbcCrypto: SubtleCrypto;

  private pubKey: CryptoKey;
  private privKey: CryptoKey;

  constructor() {
    this.cbcCrypto = crypto.subtle;
  }

  generateRSAKey(): PromiseLike<CryptoKeyPair> {
    const that = this;
    return this.cbcCrypto.generateKey(Config.RSA_KEY_FORMAT, false, ['decrypt']).then((key: CryptoKeyPair) => {
      that.privKey = key.privateKey;
      that.pubKey = key.publicKey;

      return key;
    });
  }

  setPrivateKey(privKey: CryptoKey): void {
    this.privKey = privKey;
  }

  setPublicKey(pubKey: CryptoKey): void {
    this.pubKey = pubKey;
  }

  asymDecrypt(keyData: ArrayBuffer): PromiseLike<ArrayBuffer> {
    return this.cbcCrypto.decrypt(Config.RSA_TYPE_PARAM, this.privKey, keyData);
  }

  symEncrypt(keyData: ArrayBuffer, data: ArrayBuffer): PromiseLike<ArrayBuffer> {
    const params = Config.generateAESKeyFormat();

    return this.cbcCrypto.importKey('raw', keyData, params.name, true, ['encrypt']).then((symKey: CryptoKey) => {
      return this.cbcCrypto.encrypt(params, symKey, data);
    });
  }

  symDecrypt(keyData: ArrayBuffer, data: ArrayBuffer): PromiseLike<ArrayBuffer> {
    const params = Config.generateAESKeyFormat();

    return this.cbcCrypto.importKey('raw', keyData, params.name, true, ['decrypt']).then((symKey: CryptoKey) => {
      return this.cbcCrypto.decrypt(params, symKey, data);
    });
  }

  getPublicKey(): CryptoKey {
    return this.pubKey;
  }

  getPublicKeyB64(): PromiseLike<string> {
    return this.cbcCrypto.exportKey('spki', this.pubKey).then((keydata: ArrayBuffer) => {
      const body = btoa(String.fromCharCode.apply(null, new Uint8Array(keydata)));
      const publicKeyBase64 = btoa(`-----BEGIN PUBLIC KEY-----\n${body}\n-----END PUBLIC KEY-----`);
      return publicKeyBase64;
    });
  }
}
