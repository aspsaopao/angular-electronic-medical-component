import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { HistoryItemIntervalState } from '../../history/states/history-item-state';
import { HistoryItemIntervalShapeStateObject, HistoryItemIntervalStateObject } from '../../history/states/history-item-state-object';
import { JSONShapeProperty } from '../../json/enums/json-floating-enums';
import { Shape } from '../../shapes/shape';
import { SubDocument } from '../../sub-document';
import { BaseManipulator } from '../base-manipulator';
import { IIntervalPropertyManipulator } from '../i-properties-manipulator';
import { ModelManipulator } from '../model-manipulator';
export declare class ShapeManipulator extends BaseManipulator {
    fillColor: IIntervalPropertyManipulator<number>;
    outlineColor: IIntervalPropertyManipulator<number>;
    outlineWidth: IIntervalPropertyManipulator<number>;
    constructor(manipulator: ModelManipulator);
    setValue(subDocument: SubDocument, interval: FixedInterval, newValue: Shape): HistoryItemIntervalState<HistoryItemIntervalShapeStateObject>;
    restoreValue(subDocument: SubDocument, state: HistoryItemIntervalState<HistoryItemIntervalShapeStateObject>): void;
}
export declare class ShapePropertyManipulator<T> implements IIntervalPropertyManipulator<T> {
    manipulator: ModelManipulator;
    jsonShapeProperty: JSONShapeProperty;
    setPropertyValue: (property: Shape, value: T) => void;
    getPropertyValue: (property: Shape) => T;
    constructor(manipulator: ModelManipulator, jsonShapeProperty: JSONShapeProperty, setPropertyValue: (property: Shape, value: T) => void, getPropertyValue: (property: Shape) => T);
    setValue(subDocument: SubDocument, interval: FixedInterval, newValue: T): HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    restoreValue(subDocument: SubDocument, state: HistoryItemIntervalState<HistoryItemIntervalStateObject>): void;
}
//# sourceMappingURL=shape-manipulator.d.ts.map