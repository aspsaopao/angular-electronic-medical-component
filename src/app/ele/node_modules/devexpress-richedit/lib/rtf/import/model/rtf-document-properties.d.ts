import { RtfCharset } from './character/enums';
import { RtfColorIndexCollection } from './color-collections';
import { RtfNumberingList } from './numbering-lists/rtf-numbering-list';
import { RtfNumberingListOverride } from './numbering-lists/rtf-numbering-list-override';
export declare class RtfDocumentProperties {
    readonly colorIndexes: RtfColorIndexCollection;
    readonly listTable: RtfNumberingList[];
    readonly listOverrideTable: RtfNumberingListOverride[];
    charset: RtfCharset;
    defaultCodePage: number;
    listTableComplete: boolean;
    listOverrideTableComplete: boolean;
    constructor();
}
//# sourceMappingURL=rtf-document-properties.d.ts.map