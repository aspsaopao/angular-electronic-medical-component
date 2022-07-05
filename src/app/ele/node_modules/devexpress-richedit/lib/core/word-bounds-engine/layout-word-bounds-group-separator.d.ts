import { Flag } from '@devexpress/utils/lib/class/flag';
import { WordGroupMask } from './layout-word-bounds';
export declare abstract class LayoutWordBoundsGroupSeparator {
    protected prevMask: Flag;
    protected mask: Flag;
    protected ignoredGroupMask: WordGroupMask;
    private isAnyGroupSet;
    applyMask(mask: WordGroupMask): boolean;
    protected abstract whileNoOneGroupSet(mask: WordGroupMask): any;
}
export declare class LayoutWordBoundsNextGroupSeparator extends LayoutWordBoundsGroupSeparator {
    private initGroup;
    constructor(isJoinSpacesOnEndWord: boolean);
    protected whileNoOneGroupSet(mask: WordGroupMask): void;
}
export declare class LayoutWordBoundsPrevGroupSeparator extends LayoutWordBoundsGroupSeparator {
    protected whileNoOneGroupSet(mask: WordGroupMask): void;
}
//# sourceMappingURL=layout-word-bounds-group-separator.d.ts.map