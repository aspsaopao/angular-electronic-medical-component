import { TextDirection } from '../../../../core/model/tables/secondary-structures/table-base-structures';
export declare enum VerticalAlignment {
    Top = 0,
    Both = 1,
    Center = 2,
    Bottom = 3
}
export declare class RtfGeneralSectionInfo {
    onlyAllowEditingOfFormFields: boolean;
    firstPagePaperSource: number;
    otherPagePaperSource: number;
    textDirection: TextDirection;
    verticalTextAlignment: VerticalAlignment;
    rightToLeft: boolean;
    copyFrom(obj: RtfGeneralSectionInfo): void;
}
//# sourceMappingURL=general-section-info.d.ts.map