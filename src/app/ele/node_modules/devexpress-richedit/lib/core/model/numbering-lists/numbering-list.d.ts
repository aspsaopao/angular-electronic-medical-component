import { IEquatable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { DocumentModel } from '../document-model';
import { IListLevel, IOverrideListLevel, ListLevel } from './list-level';
export declare abstract class NumberingListBase<T extends IListLevel> implements IEquatable<NumberingListBase<T>>, ISupportCopyFrom<NumberingListBase<T>> {
    static depth: number;
    static NoNumberingListIndex: number;
    static NumberingListNotSettedIndex: number;
    innerId: number;
    levels: T[];
    deleted: boolean;
    documentModel: DocumentModel;
    constructor(documentModel: DocumentModel, levelCount: number);
    getId(): number;
    resetId(): void;
    abstract generateNewId(): number;
    abstract createLevel(_index: number): T;
    abstract copyLevelsFrom(levels: T[]): any;
    initLevels(levelCount: number): void;
    getLevelType(listLevelIndex: number): NumberingType;
    getListType(): NumberingType;
    equals(obj: NumberingListBase<T>): boolean;
    externallyEquals(obj: NumberingListBase<T>): boolean;
    copyFrom(obj: NumberingListBase<T>): void;
    isHybridList(): boolean;
    private isBulletListLevel;
}
export declare class AbstractNumberingList extends NumberingListBase<ListLevel> {
    constructor(documentModel: DocumentModel);
    generateNewId(): number;
    createLevel(_index: number): ListLevel;
    copyLevelsFrom(levels: ListLevel[]): void;
    clone(model: DocumentModel): AbstractNumberingList;
}
export declare class NumberingList extends NumberingListBase<IOverrideListLevel> {
    abstractNumberingListIndex: number;
    constructor(documentModel: DocumentModel, abstractNumberingListIndex: number);
    getAbstractNumberingList(): AbstractNumberingList;
    generateNewId(): number;
    createLevel(index: number): IOverrideListLevel;
    copyLevelsFrom(levels: IOverrideListLevel[]): void;
    clone(model: DocumentModel): NumberingList;
}
export declare enum NumberingType {
    MultiLevel = 0,
    Simple = 1,
    Bullet = 2
}
//# sourceMappingURL=numbering-list.d.ts.map