import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { FormatterManager } from '../../../layout-formatter/managers/formatter-manager';
import { IModelManager } from '../../../model-manager';
import { InputPositionBase } from '../../../selection/input-position-base';
import { ModelIterator } from '../../model-iterator';
import { Position } from '../../position/position';
import { RunType } from '../../runs/run-type';
import { SubDocument } from '../../sub-document';
import { Field } from '../field';
import { FieldRequestManager } from '../field-request-manager';
import { FieldName } from '../names';
export declare enum FieldCodeParserState {
    start = 0,
    addedParsersCodePart = 1,
    updatedParsersCodePart = 2,
    resultPartCreated = 3,
    addedParsersResultPart = 4,
    end = 5
}
export declare enum FieldSwitchType {
    Error = 0,
    DateAndTime = 1,
    Numeric = 2,
    General = 3,
    FieldSpecific = 4
}
export declare enum FieldMailMergeType {
    NonMailMerge = 1,
    MailMerge = 2,
    Mixed = 3
}
export declare class FieldSwitch {
    name: string;
    type: FieldSwitchType;
    arg: string;
    constructor(type: FieldSwitchType, name: string, arg: string);
}
export declare class FieldParameter {
    interval: FixedInterval;
    text: string;
    constructor(interval: FixedInterval, textRepresentation: string);
    clone(): FieldParameter;
}
export declare class FieldCodeParserHelper {
    static isWhitespaceAndTextRunType(char: string, type: RunType): boolean;
    static isBackslesh(char: string): boolean;
    static isQuote(char: string): boolean;
}
export declare type FieldParserConstructorArguments = {
    modelManager: IModelManager;
    layoutFormatterManager: FormatterManager;
    requestManager: FieldRequestManager;
    subDocument: SubDocument;
    field: Field;
    modelIterator: ModelIterator;
    fieldNameFirstLetterPosition: number;
};
export declare type FieldParserConstructor = (args: FieldParserConstructorArguments) => FieldCodeParser;
export declare abstract class FieldCodeParser {
    protected readonly switchInfoList: FieldSwitch[];
    protected readonly parameterInfoList: FieldParameter[];
    modelManager: IModelManager;
    layoutFormatterManager: FormatterManager;
    requestManager: FieldRequestManager;
    inputPos: InputPositionBase;
    subDocument: SubDocument;
    modelIterator: ModelIterator;
    lowLevelParsers: FieldCodeParser[];
    parserState: FieldCodeParserState;
    fieldsStack: Field[];
    fieldNameFirstLetterPosition: Position;
    abstract get name(): FieldName;
    constructor(args: FieldParserConstructorArguments);
    protected removeInterval(interval: FixedInterval): void;
    protected replaceTextByInterval(interval: FixedInterval, text: string): void;
    protected replaceTextByLayoutDependentRun(interval: FixedInterval): void;
    static finalAction(layoutFormatterManager: FormatterManager, field: Field, subDocument: SubDocument): void;
    destructor(): void;
    getMailMergeType(): FieldMailMergeType;
    handleSwitch(newSwitch: FieldSwitch): boolean;
    handleParameter(newParameter: FieldParameter): boolean;
    protected getFormattedResult(value: number | string): string;
    private capitalizesFirstLetterOfFirstWord;
    private capitalizesFirstLetterOfEachWord;
    private replaceCharacter;
    private skipCharacters;
    private isLetterOrDigit;
    abstract parseCodeCurrentFieldInternal(responce: any): boolean;
    setInputPositionState(): void;
    getTopField(): Field;
    update(responce: any): boolean;
    private collectAndUpdateLowLevelFields;
    private updateLowLevelFields;
    private parseCodeCurrentField;
    private updateFieldsInResult;
    private moveIteratorToNextChar;
    updateInfo(): boolean;
    protected needUpdateInfo(): boolean;
    protected updateInfoCore(): void;
    parseSwitchesAndArgs(needAtLestOneSpaceAfterFieldName: boolean): boolean;
    private skipWhitespaces;
    private getFieldParameterInfo;
    private getSwitchInfo;
    private makeSwitchInfo;
    private getSwitchArgument;
    private parseSwitchOrFieldArgument;
}
//# sourceMappingURL=field-code-parser.d.ts.map