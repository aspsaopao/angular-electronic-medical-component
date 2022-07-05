import { SpellChecker } from '../../core/spelling/spell-checker';
import { ISelectionChangesListener } from '../selection/i-selection-changes-listener';
import { Selection } from '../selection/selection';
export declare class SpellCheckerSelectionChangesListener implements ISelectionChangesListener {
    private spellChecker;
    private lastStartPosition;
    private lastWordStartPosition;
    private updBoxesTimerId;
    constructor(spellChecker: SpellChecker);
    dispose(): void;
    NotifySelectionChanged(selection: Selection): void;
}
//# sourceMappingURL=spell-checker-selection-changes-listener.d.ts.map