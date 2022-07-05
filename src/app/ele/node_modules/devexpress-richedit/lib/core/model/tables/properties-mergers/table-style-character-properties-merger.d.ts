import { MaskedCharacterProperties } from '../../character/character-properties';
import { CharacterFormattingScript, StrikeoutType, UnderlineType } from '../../character/enums';
import { ColorModelInfo } from '../../color/color-model-info';
import { FontInfo } from '../../fonts/font-info';
import { ShadingInfo } from '../../shadings/shading-info';
import { ConditionalTableStyleFormatting } from '../secondary-structures/table-base-structures';
import { TableConditionalStyle } from '../styles/table-conditional-style';
import { TableMergerNotMergedPropertyResult, TablePropertiesMergerBase } from './table-properties-merger-base';
export declare abstract class TableStyleCharacterPropertiesMerger<ResultPropertyType> extends TablePropertiesMergerBase<MaskedCharacterProperties, ResultPropertyType> {
    protected getContainerFromConditionalStyle(condStyle: TableConditionalStyle): MaskedCharacterProperties;
    protected canUseValue(props: MaskedCharacterProperties): boolean;
    protected getCondTableStyleFormattingListForThisContainer(): ConditionalTableStyleFormatting[];
    protected actionBeforeDefaultValue(): boolean;
    protected getNotMergedProperty(): TableMergerNotMergedPropertyResult<ResultPropertyType>;
}
export declare class TableStyleCharacterPropertiesMergerHidden extends TableStyleCharacterPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: MaskedCharacterProperties): boolean;
    protected getPropertyMask(): number;
}
export declare class TableStyleCharacterPropertiesMergerScript extends TableStyleCharacterPropertiesMerger<CharacterFormattingScript> {
    protected getPropertyFromContainer(container: MaskedCharacterProperties): CharacterFormattingScript;
    protected getPropertyMask(): number;
}
export declare class TableStyleCharacterPropertiesMergerAllCaps extends TableStyleCharacterPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: MaskedCharacterProperties): boolean;
    protected getPropertyMask(): number;
}
export declare class TableStyleCharacterPropertiesMergerSmallCaps extends TableStyleCharacterPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: MaskedCharacterProperties): boolean;
    protected getPropertyMask(): number;
}
export declare class TableStyleCharacterPropertiesMergerNoProof extends TableStyleCharacterPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: MaskedCharacterProperties): boolean;
    protected getPropertyMask(): number;
}
export declare class TableStyleCharacterPropertiesMergerFontBold extends TableStyleCharacterPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: MaskedCharacterProperties): boolean;
    protected getPropertyMask(): number;
}
export declare class TableStyleCharacterPropertiesMergerFontName extends TableStyleCharacterPropertiesMerger<FontInfo> {
    protected getPropertyFromContainer(container: MaskedCharacterProperties): FontInfo;
    protected getPropertyMask(): number;
}
export declare class TableStyleCharacterPropertiesMergerShadingInfo extends TableStyleCharacterPropertiesMerger<ShadingInfo> {
    protected getPropertyFromContainer(container: MaskedCharacterProperties): ShadingInfo;
    protected getPropertyMask(): number;
}
export declare class TableStyleCharacterPropertiesMergerTextColor extends TableStyleCharacterPropertiesMerger<ColorModelInfo> {
    protected getPropertyFromContainer(container: MaskedCharacterProperties): ColorModelInfo;
    protected getPropertyMask(): number;
}
export declare class TableStyleCharacterPropertiesMergerFontSize extends TableStyleCharacterPropertiesMerger<number> {
    protected getPropertyFromContainer(container: MaskedCharacterProperties): number;
    protected getPropertyMask(): number;
}
export declare class TableStyleCharacterPropertiesMergerFontItalic extends TableStyleCharacterPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: MaskedCharacterProperties): boolean;
    protected getPropertyMask(): number;
}
export declare class TableStyleCharacterPropertiesMergerHighlightColor extends TableStyleCharacterPropertiesMerger<ColorModelInfo> {
    protected getPropertyFromContainer(container: MaskedCharacterProperties): ColorModelInfo;
    protected getPropertyMask(): number;
}
export declare class TableStyleCharacterPropertiesMergerStrikeoutColor extends TableStyleCharacterPropertiesMerger<ColorModelInfo> {
    protected getPropertyFromContainer(container: MaskedCharacterProperties): ColorModelInfo;
    protected getPropertyMask(): number;
}
export declare class TableStyleCharacterPropertiesMergerUnderlineColor extends TableStyleCharacterPropertiesMerger<ColorModelInfo> {
    protected getPropertyFromContainer(container: MaskedCharacterProperties): ColorModelInfo;
    protected getPropertyMask(): number;
}
export declare class TableStyleCharacterPropertiesMergerFontStrikeoutType extends TableStyleCharacterPropertiesMerger<StrikeoutType> {
    protected getPropertyFromContainer(container: MaskedCharacterProperties): StrikeoutType;
    protected getPropertyMask(): number;
}
export declare class TableStyleCharacterPropertiesMergerFontUnderlineType extends TableStyleCharacterPropertiesMerger<UnderlineType> {
    protected getPropertyFromContainer(container: MaskedCharacterProperties): UnderlineType;
    protected getPropertyMask(): number;
}
export declare class TableStyleCharacterPropertiesMergerStrikeoutWordsOnly extends TableStyleCharacterPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: MaskedCharacterProperties): boolean;
    protected getPropertyMask(): number;
}
export declare class TableStyleCharacterPropertiesMergerUnderlineWordsOnly extends TableStyleCharacterPropertiesMerger<boolean> {
    protected getPropertyFromContainer(container: MaskedCharacterProperties): boolean;
    protected getPropertyMask(): number;
}
//# sourceMappingURL=table-style-character-properties-merger.d.ts.map