import * as _ from 'lodash';

import { CBCWebCrypto } from '../src/web-crypto';
import * as assert from 'assert';

describe('Asymmetric key generation', () => {
  it('should resolve to true', () => {
    assert.equal(1, 1);
  });

  xit('should create a new object', () => {
    const crypto = new CBCWebCrypto();

    console.log(crypto);
    assert.notEqual(null, crypto);
  });

  xit('should to correct number of elements', () => {
    let crypto = new CBCWebCrypto();
    return crypto.generateRSAKey().then((key: CryptoKeyPair) => {
      assert.notEqual(null, key.publicKey);

      // done();
    });
  });
});
