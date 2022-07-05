import { DocumentModel } from '../../../core/model/document-model';
import { IOverrideListLevel, NumberingListReferenceLevel, OverrideListLevel } from '../../../core/model/numbering-lists/list-level';
export declare class OpenXmlListLevelOverride {
    get newStart(): number;
    set newStart(val: number);
    levelIndex: number;
    documentModel: DocumentModel;
    level: OverrideListLevel;
    overrideStart: boolean;
    private _newStart;
    constructor(documentModel: DocumentModel);
    getOverrideListLevel(): OverrideListLevel;
    getOverrideListLevelCore(originalLevel: NumberingListReferenceLevel): IOverrideListLevel;
    protected applyStartOverride(level: OverrideListLevel): void;
}
//# sourceMappingURL=open-xml-list-level-override.d.ts.map