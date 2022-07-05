import { ILayoutChangesListener } from '../interfaces/i-document-layout-changes-listener';
import { IModelChangesListener } from '../interfaces/model-changes-listener';
import { PageChange } from '../layout-formatter/changes/changes/page-change';
import { ModelChange } from '../model/changes/change';
import { SpellChecker } from './spell-checker';
export declare class SpellCheckerModelChangesListener implements IModelChangesListener {
    private spellChecker;
    constructor(spellChecker: SpellChecker);
    modelChanged(change: ModelChange): void;
}
export declare class SpellCheckerLayoutChangesListener implements ILayoutChangesListener {
    private spellChecker;
    constructor(spellChecker: SpellChecker);
    NotifyPagesReady(_pageChanges: PageChange[]): void;
    NotifyFullyFormatted(_pageCount: any): void;
}
//# sourceMappingURL=listeners.d.ts.map