import { IEventListener } from '../../base-utils/event-dispatcher';
import { PageChange } from '../layout-formatter/changes/changes/page-change';
export interface ILayoutChangesListener extends IEventListener {
    NotifyPagesReady(pageChanges: PageChange[]): void;
    NotifyFullyFormatted(pageCount: number): void;
}
//# sourceMappingURL=i-document-layout-changes-listener.d.ts.map