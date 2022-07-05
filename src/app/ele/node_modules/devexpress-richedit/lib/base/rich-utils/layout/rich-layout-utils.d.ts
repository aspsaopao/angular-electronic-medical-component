import { FormatterManager } from '../../../core/layout-formatter/managers/formatter-manager';
import { SubDocument } from '../../../core/model/sub-document';
import { ISelectionBase } from '../../../core/selection/selection-base';
import { Size } from '@devexpress/utils/lib/geometry/size';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
export declare class RichLayoutUtils {
    static getAllowedSizeForImage(subDocument: SubDocument, layoutFormatterManager: FormatterManager, selection: ISelectionBase, logPosition: number): Size;
    static modifyTextUnderCursor(control: IRichEditControl, text: string): void;
}
//# sourceMappingURL=rich-layout-utils.d.ts.map