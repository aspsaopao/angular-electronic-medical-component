import { Rectangle } from '@devexpress/utils/lib/geometry/rectangle';
import { LayoutAnchoredTextBox } from '../../layout/main-structures/layout-boxes/layout-anchored-text-box';
import { LayoutPage } from '../../layout/main-structures/layout-page';
import { FooterSubDocumentInfo, HeaderSubDocumentInfo, SubDocumentInfoBase } from '../../model/sub-document-infos';
import { FormatterManager } from '../managers/formatter-manager';
export declare class OtherPageAreaFormatter {
    private manager;
    constructor(manager: FormatterManager);
    protected formatOtherPageArea<TSubDocInfo extends SubDocumentInfoBase>(page: LayoutPage, subDocumentInfo: TSubDocInfo, setBounds: (value: number) => void, getHeaderOrFooterPageAreaBounds: () => Rectangle, getHeaderOrFooterColumnBounds: () => Rectangle): void;
    private shiftFooterObjectByVertical;
    setTextBoxContent(page: LayoutPage, textBox: LayoutAnchoredTextBox): void;
    formatHeaderPageArea(page: LayoutPage, headerSubDocumentInfo: HeaderSubDocumentInfo): void;
    formatFooterPageArea(page: LayoutPage, footerSubDocumentInfo: FooterSubDocumentInfo): void;
    private static reduceRowHeight;
}
//# sourceMappingURL=other-page-area-formatter.d.ts.map