import { HeaderFooterType } from '../../section/enums';
import { ModelChangeBase } from '../change-base';
import { ModelChangeType } from '../enums';
export declare class HeaderFooterIndexChangedModelChange implements ModelChangeBase {
    sectionIndex: number;
    isHeader: boolean;
    headerFooterType: HeaderFooterType;
    newIndex: number;
    readonly type = ModelChangeType.HeaderFooterIndexChanged;
    constructor(sectionIndex: number, isHeader: boolean, headerFooterType: HeaderFooterType, newIndex: number);
}
//# sourceMappingURL=header-footer-index-changed.d.ts.map