import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { AnchorInfo } from '../../floating-objects/anchor-info';
import { HistoryItemIntervalState } from '../../history/states/history-item-state';
import { HistoryItemIntervalStateObject } from '../../history/states/history-item-state-object';
import { JSONAnchorInfoProperty } from '../../json/enums/json-floating-enums';
import { SubDocument } from '../../sub-document';
import { BaseManipulator } from '../base-manipulator';
import { IIntervalPropertyManipulator } from '../i-properties-manipulator';
import { ModelManipulator } from '../model-manipulator';
export declare class AnchorInfoPropertyManipulator<T> extends BaseManipulator implements IIntervalPropertyManipulator<T> {
    jsonAnchorInfoProperty: JSONAnchorInfoProperty;
    setPropertyValue: (anchorInfo: AnchorInfo, value: T) => void;
    getPropertyValue: (anchorInfo: AnchorInfo) => T;
    constructor(manipulator: ModelManipulator, jsonAnchorInfoProperty: JSONAnchorInfoProperty, setPropertyValue: (anchorInfo: AnchorInfo, value: T) => void, getPropertyValue: (anchorInfo: AnchorInfo) => T);
    setValue(subDocument: SubDocument, interval: FixedInterval, newValue: T): HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    restoreValue(subDocument: SubDocument, state: HistoryItemIntervalState<HistoryItemIntervalStateObject>): void;
}
//# sourceMappingURL=anchor-info-property-manipulator.d.ts.map