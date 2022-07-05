import { EventDispatcher, IEventListener } from '../../base-utils/event-dispatcher';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { IRichEditControl } from '../interfaces/i-rich-edit-core';
import { ISelectionChangesListener } from '../selection/i-selection-changes-listener';
import { Selection } from '../selection/selection';
export interface ISearchResetListener extends IEventListener {
    NotifySearchReset(): void;
}
export declare class SearchManager implements ISelectionChangesListener {
    private control;
    foundIntervals: FixedInterval[];
    whatFind: string;
    onChanged: EventDispatcher<ISearchResetListener>;
    constructor(control: IRichEditControl);
    dispose(): void;
    raiseSearchReset(): void;
    NotifySelectionChanged(selection: Selection): void;
    findAll(text: string, matchCase: boolean): void;
    replaceAll(text: string, replaceText: string, matchCase: boolean): void;
    replace(text: string, replaceText: string, matchCase: boolean): boolean;
    resetSearch(): void;
    findNextIntervalIndex(): number;
    findPrevIntervalIndex(): number;
    protected findIntervalIndex(desiredInterval: FixedInterval): number;
    selectIntervalByIndex(intervalIndex: number): void;
    scrollToIntervalByIndex(intervalIndex: number): void;
}
//# sourceMappingURL=search-manager.d.ts.map