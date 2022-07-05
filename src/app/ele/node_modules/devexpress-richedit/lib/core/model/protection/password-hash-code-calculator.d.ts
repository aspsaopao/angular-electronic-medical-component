import { HashAlgorithmType } from '../options/document-protection';
import { IHashAlgorithm } from './hash-algorithm';
export declare class PasswordHashCodeCalculator {
    static initialValues: number[];
    static encryptionMatrix: number[][];
    private getBytes;
    calculateLegacyPasswordHash(password: string): Uint8Array;
    calculateLegacyPasswordHashInt(password: string): number;
    calculatePasswordHash(password: string, prefix: Uint8Array, hashCount: number, hashAlgorithmType: HashAlgorithmType): Uint8Array;
    generatePasswordPrefix(length: number): Uint8Array;
    createHashAlgorithm(hashAlgorithmType: HashAlgorithmType): IHashAlgorithm | null;
    calculatePasswordHashAfterDetectedAlgoritm(password: string, prefix: Uint8Array, hashCount: number, hashAlgorithm: IHashAlgorithm): Uint8Array;
    private getUnicodeArray;
    calculatePasswordHashCore(legacyPasswordHash: Uint8Array, prefix: Uint8Array, hashCount: number, hashAlgorithm: IHashAlgorithm): Uint8Array;
    byteArrayToWordArray(bytes: Uint8Array): number[];
    wordToByteArray(word: any, length: any): any[];
    wordArrayToByteArray(wordArray: any, length: any): any;
    concatenateArrays(b1: Uint8Array, b2: Uint8Array): Uint8Array;
    concatenate(bytes: Uint8Array, num: number): Uint8Array;
    concatenateArray(wordArray: number[], num: number): number[];
    static compareByteArrays(b1: Uint8Array, b2: Uint8Array): boolean;
    calculatePasswordBytes(password: string): number[];
    calculateKeyLowWord(bytes: number[]): number;
    processLowWordByte(key: number, b: number): number;
    calculateKeyHighWord(bytes: number[]): number;
    processHighWordByte(key: number, b: number, rowIndex: number): number;
}
//# sourceMappingURL=password-hash-code-calculator.d.ts.map