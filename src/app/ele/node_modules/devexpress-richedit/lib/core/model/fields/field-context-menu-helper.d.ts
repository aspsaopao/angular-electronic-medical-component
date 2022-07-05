import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { SubDocument, SubDocumentInterval } from '../sub-document';
import { Field } from './field';
export declare class FieldContextMenuHelper {
    static getHyperlinkResultText(subDocument: SubDocument, field: Field): string;
    static canChangeHyperlinkDisplayText(subDocInterval: SubDocumentInterval): boolean;
    static showUpdateAndToogleCodeItems(fields: Field[], intervals: FixedInterval[]): boolean;
    static showCreateHyperlinkItem(fields: Field[], interval: FixedInterval): boolean;
    static showHyperlinkItems(fields: Field[], interval: FixedInterval): Field;
    static getHyperlinkField(fields: Field[], interval: FixedInterval): Field;
    static getHyperlinkFieldCore(fields: Field[], interval: FixedInterval, fieldIntervalGetter?: (field: Field) => FixedInterval): Field;
    private static getNextTopLevelField;
    private static getFinalResult;
}
//# sourceMappingURL=field-context-menu-helper.d.ts.map