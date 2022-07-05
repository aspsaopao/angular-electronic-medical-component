import { AnchorObjectsPositionInfo } from '../../../layout/document-layout';
import { LayoutAnchoredObjectBox } from '../../../layout/main-structures/layout-boxes/layout-anchored-object-box';
import { PosAndAncInfo } from './z-order-manipulator';
export declare function posAndAncInfoOneSubDocComparer(a: PosAndAncInfo, b: PosAndAncInfo): number;
export declare function getLayoutAnchoredObjectBoxInitialComparer(anchorObjectsPositionInfo: AnchorObjectsPositionInfo): (a: LayoutAnchoredObjectBox, b: LayoutAnchoredObjectBox) => number;
export declare function getLayoutAnchoredObjectBoxComparer(anchorObjectsPositionInfo: AnchorObjectsPositionInfo): (a: LayoutAnchoredObjectBox, b: LayoutAnchoredObjectBox) => number;
//# sourceMappingURL=comparers.d.ts.map