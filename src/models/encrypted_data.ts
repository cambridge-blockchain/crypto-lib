export class EncryptedData {
    encData: ArrayBuffer;
    iv: Uint8Array;

    toString(): string {
        return btoa(String.fromCharCode.apply(null, new Uint8Array(this.encData)));
    }
}
