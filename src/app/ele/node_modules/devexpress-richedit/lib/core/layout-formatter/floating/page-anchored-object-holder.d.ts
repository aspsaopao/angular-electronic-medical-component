import { AnchorObjectsPositionInfo, DocumentLayout } from '../../layout/document-layout';
import { LayoutAnchoredObjectBox } from '../../layout/main-structures/layout-boxes/layout-anchored-object-box';
import { LayoutAnchoredTextBox } from '../../layout/main-structures/layout-boxes/layout-anchored-text-box';
import { BaseFormatter } from '../formatter/base-formatter';
import { FormatterManager } from '../managers/formatter-manager';
export declare class PageAnchoredObjectHolder {
    objects: Record<number, LayoutAnchoredObjectBox>;
    constructor();
    getObjectByModelPosition(layout: DocumentLayout, position: number, belongsToSubDocId: number): LayoutAnchoredObjectBox;
    onColumnEnd(activeFormatter: BaseFormatter): void;
    getObjectsForRenderer(anchorObjectsPositionInfo: AnchorObjectsPositionInfo, objects?: Record<number, LayoutAnchoredObjectBox>): LayoutAnchoredObjectBox[];
    getObjById(id: number): LayoutAnchoredObjectBox;
    getTextBoxByInternalSubDocId(id: number): LayoutAnchoredTextBox;
    isObjectExist(obj: LayoutAnchoredObjectBox): boolean;
    addObject(manager: FormatterManager, obj: LayoutAnchoredObjectBox): void;
    private correctPositionDueToOtherBoxes;
    shallowCopy(): PageAnchoredObjectHolder;
}
//# sourceMappingURL=page-anchored-object-holder.d.ts.map