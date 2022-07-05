import { IEquatable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { CharacterProperties, MaskedCharacterProperties } from '../character/character-properties';
import { DocumentModel } from '../document-model';
import { ICharacterPropertiesContainer, IListLevelPropertiesContainer, IParagraphPropertiesContainer } from '../interfaces';
import { MaskedParagraphProperties, ParagraphProperties } from '../paragraph/paragraph-properties';
import { ListLevelProperties } from './list-level-properties';
import { NumberingList } from './numbering-list';
export interface IListLevel extends ICharacterPropertiesContainer, IParagraphPropertiesContainer, IListLevelPropertiesContainer, IEquatable<IListLevel>, ISupportCopyFrom<IListLevel> {
    documentModel: DocumentModel;
    getCharacterProperties(): MaskedCharacterProperties;
    getParagraphProperties(): MaskedParagraphProperties;
    externallyEquals(obj: IListLevel): boolean;
}
export interface IOverrideListLevel extends IListLevel {
    overrideStart: boolean;
    getNewStart(): number;
    setNewStart(newStart: number): any;
}
export declare class ListLevel implements IListLevel {
    documentModel: DocumentModel;
    constructor(documentModel: DocumentModel, maskedCharacterProperties: MaskedCharacterProperties, maskedParagraphProperties: MaskedParagraphProperties, listLevelProperties: ListLevelProperties);
    private mergedCharacterProperties;
    private maskedCharacterProperties;
    private mergedParagraphProperties;
    private maskedParagraphProperties;
    private listLevelProperties;
    getListLevelProperties(): ListLevelProperties;
    setListLevelProperties(properties: ListLevelProperties): void;
    changeListLevelProperties(change: (properties: ListLevelProperties) => void): void;
    getCharacterProperties(): MaskedCharacterProperties;
    getParagraphProperties(): MaskedParagraphProperties;
    setParagraphProperties(properties: MaskedParagraphProperties): void;
    onParagraphPropertiesChanged(): void;
    resetParagraphMergedProperties(): void;
    getParagraphMergedProperties(): ParagraphProperties;
    setParagraphMergedProperies(properties: ParagraphProperties): void;
    hasParagraphMergedProperies(): boolean;
    setCharacterProperties(properties: MaskedCharacterProperties): void;
    onCharacterPropertiesChanged(): void;
    resetCharacterMergedProperties(): void;
    getCharacterMergedProperties(): CharacterProperties;
    setCharacterMergedProperies(properties: CharacterProperties): void;
    hasCharacterMergedProperies(): boolean;
    equals(obj: ListLevel): boolean;
    externallyEquals(obj: ListLevel): boolean;
    copyFrom(obj: IListLevel): void;
}
export declare class NumberingListReferenceLevel implements IOverrideListLevel {
    private owner;
    level: number;
    documentModel: DocumentModel;
    constructor(owner: NumberingList, level: number);
    getListLevelProperties(): ListLevelProperties;
    setListLevelProperties(properties: ListLevelProperties): void;
    getCharacterProperties(): MaskedCharacterProperties;
    getParagraphProperties(): MaskedParagraphProperties;
    setParagraphProperties(properties: MaskedParagraphProperties): void;
    onParagraphPropertiesChanged(): void;
    getParagraphMergedProperties(): ParagraphProperties;
    setParagraphMergedProperies(properties: ParagraphProperties): void;
    hasParagraphMergedProperies(): boolean;
    resetParagraphMergedProperties(): void;
    setCharacterProperties(properties: MaskedCharacterProperties): void;
    onCharacterPropertiesChanged(): void;
    getCharacterMergedProperties(): CharacterProperties;
    setCharacterMergedProperies(properties: CharacterProperties): void;
    hasCharacterMergedProperies(): boolean;
    resetCharacterMergedProperties(): void;
    getNewStart(): number;
    setNewStart(newStart: number): void;
    overrideStart: boolean;
    private newStart;
    private getOwnerLevel;
    equals(obj: NumberingListReferenceLevel): boolean;
    externallyEquals(obj: NumberingListReferenceLevel): boolean;
    copyFrom(obj: IListLevel): void;
}
export declare class OverrideListLevel extends ListLevel implements IOverrideListLevel {
    overrideStart: boolean;
    getNewStart(): number;
    setNewStart(newStart: number): void;
    copyFrom(obj: IListLevel): void;
}
//# sourceMappingURL=list-level.d.ts.map