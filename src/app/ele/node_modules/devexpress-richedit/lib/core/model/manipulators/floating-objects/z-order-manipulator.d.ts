import { IModelManager } from '../../../model-manager';
import { AnchorInfo } from '../../floating-objects/anchor-info';
import { SubDocument } from '../../sub-document';
import { BaseManipulator } from '../base-manipulator';
export declare class PosAndAncInfo {
    anchorInfo: AnchorInfo;
    position: number;
    constructor(anchorInfo: AnchorInfo, position: number);
}
export declare class ZOrderManipulator extends BaseManipulator {
    private static STEP;
    getNewZOrder(subDoc: SubDocument): number;
    private getFloatingObjects;
    private setNewZOrder;
    bringToFront(IModelAccessor: IModelManager, parentSubDocument: SubDocument, position: number): boolean;
    sendToBack(IModelAccessor: IModelManager, parentSubDocument: SubDocument, position: number): boolean;
    bringForward(IModelAccessor: IModelManager, parentSubDocument: SubDocument, position: number): boolean;
    sendBackward(IModelAccessor: IModelManager, parentSubDocument: SubDocument, position: number): boolean;
    private advanceOrder;
}
//# sourceMappingURL=z-order-manipulator.d.ts.map