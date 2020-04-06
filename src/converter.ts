import * as _ from 'lodash';

export class Converter {
    static HexToArrayBuffer(hexStr: string): ArrayBuffer {
        const result = new ArrayBuffer(hexStr.length / 2);
        const buffer = new Uint8Array(result);

        let i = 0;
        while (hexStr.length >= 2) {
            buffer[i] = parseInt(hexStr.substring(0, 2), 16);
            hexStr = hexStr.substring(2, hexStr.length);
            i += 1;
        }

        return result;
    }

    static StringToUint8Array(data: string): Uint8Array {
        return Uint8Array.from(atob(data), (c) => c.charCodeAt(0));
    }
}
