import { IListLevel } from '../../../../core/model/numbering-lists/list-level';
import { RtfImportData } from '../../rtf-import-data';
import { DestinationBase } from '../base/destination';
import { DestinationType } from '../utils/destination-type';
import { DestinationOldParagraphNumberingBase } from './destination-old-paragraph-numbering-base';
export declare class DestinationOldParagraphNumbering extends DestinationOldParagraphNumberingBase {
    protected get destinationType(): DestinationType;
    oldLevelNumber: number;
    simpleListIndex: number;
    multiLevelListIndex: number;
    listLevelIndex: number;
    isOldNumberingListCreated: boolean;
    skipNumbering: boolean;
    simpleList: boolean;
    protected explicitNumberingListIndex: boolean;
    protected explicitListLevelIndex: boolean;
    protected numberingListIndex: number;
    constructor(importer: RtfImportData);
    static onParagraphLevelKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    static onBulletedParagraphKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onSimpleNumberingKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onSkipNumberingKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onListOverrideKeyword(importer: RtfImportData, parameterValue: number, _hasParameter: boolean): void;
    static onListLevelKeyword(importer: RtfImportData, parameterValue: number, _hasParameter: boolean): void;
    protected createClone(): DestinationBase;
    beforePopRtfState(): void;
    afterPopRtfState(): void;
    protected createNewList(): void;
    private createMultilevelListLevels;
    private createBulletedListLevels;
    private createSimpleNumberingListLevels;
    protected shouldCreateNewAbstractSimpleList(): {
        isSecceed: boolean;
        existingNumberingListIndex: number;
    };
    protected setLegacyProperties(level: IListLevel, legacyIndent: number, legacySpace: number): void;
    protected setDisplayFormatString(level: IListLevel, displayFormatString: string): void;
    protected setFirstLineIndent(level: IListLevel, lineIndent: number): void;
    protected setTemplateCode(level: IListLevel, templateCode: number): void;
    protected shouldCreateNewList(): boolean;
    protected isNewListLevelInfoPresent(): boolean;
    private areSameInfo;
    protected isSimpleList(): boolean;
    protected isMultilevelList(): boolean;
    protected sectionMultiLevelListCreated(): boolean;
    protected isSkipNumbering(): boolean;
}
//# sourceMappingURL=destination-old-paragraph-numbering.d.ts.map