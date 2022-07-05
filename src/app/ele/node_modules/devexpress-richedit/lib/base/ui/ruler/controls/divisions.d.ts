import { RichEditUnit } from '../../../../base-utils/unit-converter';
import { RulerControls } from '../manager';
import { RulerModelData } from '../model-data';
import { RulerBase } from './base';
export declare const MINOR_TOP_AND_BOTTOM_MARGIN: number;
export declare const MAJOR_TOP_AND_BOTTOM_MARGIN: number;
export declare const DIVISION_CONTAINER_CLASS_NAME: string;
export declare const DIVISION_CLASS_NAME: string;
export declare const DIVISION_MINOR_CLASS_NAME: string;
export declare const DIVISION_MAJOR_CLASS_NAME: string;
export declare const DIVISION_NUMBER_CLASS_NAME: string;
export declare class RulerDivisionsControl extends RulerBase {
    viewState: number;
    private initialLeft;
    readonly height: number;
    protected getRootClassName(): string;
    constructor(modelData: RulerModelData, controls: RulerControls, divisionInfo: DivisionInfo, maxPageWidth: number);
    update(): void;
    updateModelState(): void;
    updateView(): void;
    private getViewValue;
}
export declare enum DivisionType {
    Number = 0,
    Minor = 1,
    Major = 2
}
export declare class DivisionInfo {
    readonly unitMap: DivisionType[];
    readonly unitSize: number;
    readonly stepSize: number;
    constructor(map: number[], unitSize: number);
    static create(unitType: RichEditUnit): DivisionInfo;
}
//# sourceMappingURL=divisions.d.ts.map