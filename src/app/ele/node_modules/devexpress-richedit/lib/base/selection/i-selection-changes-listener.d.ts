import { IEventListener } from '../../base-utils/event-dispatcher';
import { Selection } from './selection';
export interface ISelectionChangesListener extends IEventListener {
    NotifySelectionChanged(selection: Selection): void;
}
export interface IScrollChangesListener extends IEventListener {
    NotifyScrollChanged(): void;
}
export interface ISearchSelectionChangesListener extends IEventListener {
    NotifySearchSelectionChanged(): void;
}
export interface IMisspelledSelectionChangesListener extends IEventListener {
    NotifyMisspelledSelectionChanged(): void;
}
//# sourceMappingURL=i-selection-changes-listener.d.ts.map