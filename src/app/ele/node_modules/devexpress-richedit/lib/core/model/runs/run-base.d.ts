import { Size } from '@devexpress/utils/lib/geometry/size';
import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { MaskedCharacterPropertiesBundle } from '../../rich-utils/properties-bundle';
import { CacheImageInfo } from '../caches/images';
import { CharacterProperties, MaskedCharacterProperties } from '../character/character-properties';
import { CharacterStyle } from '../character/character-style';
import { DocumentModel } from '../document-model';
import { PictureSize } from '../floating-objects/sizes';
import { TextBoxProperties } from '../floating-objects/text-box-properties';
import { ICharacterPropertiesContainer } from '../interfaces';
import { BasePictureInfo } from '../manipulators/picture-manipulator/insert-picture-manipulator-params';
import { NonVisualDrawingObjectInfo } from '../manipulators/picture-manipulator/non-visual-drawing-object-info';
import { Paragraph } from '../paragraph/paragraph';
import { Shape } from '../shapes/shape';
import { SubDocument } from '../sub-document';
import { RunType } from './run-type';
export interface ICharacterPropertiesMergeOptions {
    excludeCharacterStyle?: boolean;
}
export declare abstract class RunBase implements ICharacterPropertiesContainer, ISupportCopyFrom<RunBase>, ICloneable<RunBase> {
    protected static anchoredObjectIdCounter: number;
    startOffset: number;
    paragraph: Paragraph;
    characterStyle: CharacterStyle;
    maskedCharacterProperties: MaskedCharacterProperties;
    private mergedCharacterProperties;
    constructor(startOffset: number, paragraph: Paragraph, charPropsBundle: MaskedCharacterPropertiesBundle);
    abstract getLength(): number;
    abstract incLength(additionalLength: number): any;
    abstract setLength(newLength: number): any;
    abstract getType(): RunType;
    isParagraphOrSectionRun(): boolean;
    setCharacterProperties(properties: MaskedCharacterProperties): void;
    onCharacterPropertiesChanged(): void;
    hasCharacterMergedProperies(): boolean;
    resetCharacterMergedProperties(): void;
    getCharacterMergedProperties(): CharacterProperties;
    mergeCharacterProperties(options?: ICharacterPropertiesMergeOptions): CharacterProperties;
    setCharacterMergedProperies(properties: CharacterProperties): void;
    abstract clone(): RunBase;
    abstract cloneToNewSubDocument(subDocument: SubDocument): RunBase;
    copyFrom(obj: RunBase): void;
    createSimularity(startOffset: number, length: number, paragraph: Paragraph, characterStyle: CharacterStyle, maskedCharacterProperties: MaskedCharacterProperties): RunBase;
    getCharPropsBundle(model: DocumentModel): MaskedCharacterPropertiesBundle;
}
export declare abstract class OneCharRun extends RunBase {
    getLength(): number;
    setLength(newLength: number): void;
    incLength(_additionalLength: number): void;
}
export declare abstract class PictureRun<T extends BasePictureInfo> extends OneCharRun implements ISupportCopyFrom<PictureRun<T>> {
    info: T;
    get shape(): Shape;
    set shape(val: Shape);
    get size(): PictureSize;
    set size(val: PictureSize);
    get cacheInfo(): CacheImageInfo;
    constructor(startOffset: number, paragraph: Paragraph, charPropsBundle: MaskedCharacterPropertiesBundle, info: T);
    getActualSize(): Size;
    copyFrom(obj: PictureRun<T>): void;
}
export declare abstract class TextBoxRun extends OneCharRun implements ISupportCopyFrom<TextBoxRun> {
    shape: Shape;
    subDocId: number;
    textBoxProperties: TextBoxProperties;
    containerProperties: NonVisualDrawingObjectInfo;
    constructor(startOffset: number, paragraph: Paragraph, charPropsBundle: MaskedCharacterPropertiesBundle, shape: Shape, subDocId: number, textBoxProperties: TextBoxProperties, containerProperties: NonVisualDrawingObjectInfo);
    copyFrom(obj: TextBoxRun): void;
}
//# sourceMappingURL=run-base.d.ts.map