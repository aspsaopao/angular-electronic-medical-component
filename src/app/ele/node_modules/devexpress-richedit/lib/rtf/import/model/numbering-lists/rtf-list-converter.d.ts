import { DocumentModel } from '../../../../core/model/document-model';
import { AbstractNumberingList } from '../../../../core/model/numbering-lists/numbering-list';
import { RtfImportData } from '../../rtf-import-data';
import { RtfListLevel } from './rtf-list-level';
import { RtfNumberingList } from './rtf-numbering-list';
import { RtfNumberingListOverride } from './rtf-numbering-list-override';
export declare class RtfListConverter {
    readonly styleCrossTable: Record<number, number>;
    readonly importer: RtfImportData;
    constructor(importer: RtfImportData);
    get documentModel(): DocumentModel;
    convert(listTable: RtfNumberingList[], listOverrideTable: RtfNumberingListOverride[]): void;
    fixBrokenListStyles(): void;
    findAbstractNumberingListByStyle(_styleIndex: number): number;
    createNumberingListsCore(listOverrideTable: RtfNumberingListOverride[], _listTable: RtfNumberingList[]): void;
    createAbstractNumberingLists(listTable: RtfNumberingList[]): void;
    createAbstractNumberingList(rtfList: RtfNumberingList): AbstractNumberingList;
    protected isHybridList(rtfList: RtfNumberingList): boolean;
    private setHybridListType;
    getListIndex(listId: number, lists: AbstractNumberingList[]): number;
    private convertRtfOverrideToNumbering;
    protected convertRtfListToNumberingList(rtfLevels: RtfListLevel[], list: AbstractNumberingList): void;
    private convertPropertyRtfToNumbering;
}
//# sourceMappingURL=rtf-list-converter.d.ts.map