import { NumberingType } from '../../../core/model/numbering-lists/numbering-list';
import { ToggleNumberingListCommand } from './toggle-numbering-list-command';
export declare class ToggleBulletedListCommand extends ToggleNumberingListCommand {
    getNumberingListType(): NumberingType;
    isEnabled(): boolean;
}
//# sourceMappingURL=toggle-bulleted-list-command.d.ts.map