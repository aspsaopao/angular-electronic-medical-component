import { Size } from '@devexpress/utils/lib/geometry/size';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { PictureSize } from '../floating-objects/sizes';
import { HistoryItemIntervalState } from '../history/states/history-item-state';
import { HistoryItemInlineObjectPropertiesStateObject } from '../history/states/history-item-state-object';
import { JSONInlineObjectProperty } from '../json/enums/json-floating-enums';
import { SubDocument } from '../sub-document';
import { BaseManipulator } from './base-manipulator';
import { IIntervalPropertyManipulator } from './i-properties-manipulator';
import { ModelManipulator } from './model-manipulator';
export declare class InlineObjectManipulator extends BaseManipulator {
    scale: IIntervalPropertyManipulator<Size>;
    lockAspectRatio: IIntervalPropertyManipulator<boolean>;
    constructor(manipulator: ModelManipulator);
}
export declare abstract class InlineObjectPropertyManipulator<T> extends BaseManipulator implements IIntervalPropertyManipulator<T> {
    jsonProperty: JSONInlineObjectProperty;
    setValue(subDocument: SubDocument, interval: FixedInterval, newValue: T): HistoryItemIntervalState<HistoryItemInlineObjectPropertiesStateObject>;
    restoreValue(subDocument: SubDocument, state: HistoryItemIntervalState<HistoryItemInlineObjectPropertiesStateObject>): void;
    abstract getPropertyValue(size: PictureSize): T;
    abstract setPropertyValue(size: PictureSize, value: T): any;
    abstract getJSONInlineObjectProperty(): JSONInlineObjectProperty;
}
//# sourceMappingURL=inline-object-manipulator.d.ts.map