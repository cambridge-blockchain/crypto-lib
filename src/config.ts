export class Config {
    // RSA OAEP configuration parameters
    public static RSA_KEY_FORMAT = {
        name: 'RSA-OAEP',
        modulusLength: 2048,

        // https://security.stackexchange.com/questions/2335/should-rsa-public-exponent-be-only-in-3-5-17-257-or-65537-due-to-security-c
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]), // Equivalent to 65537
        hash: { name: 'SHA-256' },
    };

    public static RSA_TYPE_PARAM = {
        name: Config.RSA_KEY_FORMAT.name,
    };

    // AES configuration parameters
    public static AES_TYPE_PARAM = {
        name: 'AES-GCM',
    };

    public static generateAESKeyFormat(): any {
        return {
            name: this.AES_TYPE_PARAM.name,
            // iv: crypto.getRandomValues(new Uint8Array(16))
            // XXX: Security issue, change to 'iv: crypto.getRandomValues(new Uint8Array(16))' before production use
            iv: new Uint8Array(16),
        };
    }
}
