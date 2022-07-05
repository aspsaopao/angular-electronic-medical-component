import { RtfListLevel } from './rtf-list-level';
export declare enum RtfNumberingListType {
    Unknown = 0,
    Hybrid = 1,
    Simple = 2
}
export declare class RtfNumberingList {
    id: number;
    parentStyleId: number;
    name: string;
    styleName: string;
    levels: RtfListLevel[];
    numberingListType: RtfNumberingListType;
}
//# sourceMappingURL=rtf-numbering-list.d.ts.map