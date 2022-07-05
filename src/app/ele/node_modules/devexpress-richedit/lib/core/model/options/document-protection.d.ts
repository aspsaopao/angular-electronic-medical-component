import { DocumentProtectionType } from '../json/enums/json-document-enums';
export declare enum HashAlgorithmType {
    None = 0,
    Md2 = 1,
    Md4 = 2,
    Md5 = 3,
    Sha1 = 4,
    Mac = 5,
    Ripemd = 6,
    Ripemd160 = 7,
    HMac = 9,
    Sha256 = 12,
    Sha384 = 13,
    Sha512 = 14
}
export declare enum CryptProviderType {
    RsaFull = 0,
    RsaAES = 1
}
export declare class DocumentProtectionProperties {
    enforceProtection: boolean;
    protectionType: DocumentProtectionType;
    hashAlgorithmType: HashAlgorithmType;
    cryptProviderType: CryptProviderType;
    hashIterationCount: number;
    passwordHash: Uint8Array;
    passwordPrefix: Uint8Array;
    word2003PasswordHash: Uint8Array;
    openOfficePasswordHash: Uint8Array;
    copyFrom(obj: DocumentProtectionProperties): void;
    clone(): DocumentProtectionProperties;
}
//# sourceMappingURL=document-protection.d.ts.map