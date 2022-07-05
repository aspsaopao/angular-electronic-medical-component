import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { ParagraphListInfo } from '../../../../rich-utils/properties-bundle';
import { MaskedParagraphProperties } from '../../../paragraph/paragraph-properties';
import { ParagraphStyle, TabProperties } from '../../../paragraph/paragraph-style';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class ParagraphPropertiesChangedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    paragraphIndex: number;
    paragraphInterval: FixedInterval;
    properties: MaskedParagraphProperties;
    style: ParagraphStyle;
    tabs: TabProperties;
    listInfo: ParagraphListInfo;
    readonly type = ModelChangeType.ParagraphPropertiesChanged;
    constructor(subDocumentId: number, paragraphIndex: number, paragraphInterval: FixedInterval, properties: MaskedParagraphProperties, style: ParagraphStyle, tabs: TabProperties, listInfo: ParagraphListInfo);
}
//# sourceMappingURL=paragraph-properties-changed.d.ts.map