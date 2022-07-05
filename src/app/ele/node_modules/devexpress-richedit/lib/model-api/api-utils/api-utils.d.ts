import { ModelIterator } from '../../core/model/model-iterator';
import { SubDocument as SubDocumentCore } from '../../core/model/sub-document';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { IEquatable } from '@devexpress/utils/lib/types';
import { IInterval } from '../interval';
export declare class ApiUtils {
    static getObject<T extends IEquatable<T>>(objs: T[], getStartPos: (obj: T) => number, toFind: number, templateObj: T): number;
    static getAllRunsByFullSearch(sd: SubDocumentCore, callback: (it: ModelIterator) => boolean): ModelIterator;
    static internalColorToApiColor(color: number): string;
    static assertObject(value: any, parameter: string): void;
    static assertBoolean(value: any, parameter: string): void;
    static assertArray(value: any, parameter: string): void;
    static assertNumber(value: any, parameter: string): void;
    static assertNonNegativeNumber(value: any, parameter: string): void;
    static assertNumberByBounds(value: any, minValue: number, maxValue: number, parameter: string): void;
    static assertPositiveNumber(value: any, parameter: string): void;
    static assertFunction(value: any, parameter: string): void;
    static assertString(value: any, notEmpty: boolean, parameter: string): void;
    static assertAndConvertColor(value: any, allowNull: boolean, parameter: string): number;
    static assertFile(value: any, parameter: string): void;
    static assertEnum(value: any, enumType: object, enumTypeName: string, parameter: string): void;
    static isNullOrEmptyString(value: any): boolean;
}
export declare function getRestrictedInterval(interval: IInterval, minBound?: number, maxBound?: number): FixedInterval;
//# sourceMappingURL=api-utils.d.ts.map