import * as _ from 'lodash';

import { Converter } from '../src/converter';
import * as assert from 'assert';

describe('string encoding conversions', () => {
  it('should handle a dummy test', () => {
    assert.equal(1, 1);
  });

  it('should convert hex to correct number of elements', () => {
    let byteArray = Converter.HexToArrayBuffer('3E18A4');

    let length = byteArray.byteLength; // _.length(byteArray);
    assert.equal(length, 3);
  });
});
