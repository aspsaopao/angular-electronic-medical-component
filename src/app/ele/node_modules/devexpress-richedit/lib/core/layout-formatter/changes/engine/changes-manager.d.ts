import { PageChange } from '../changes/page-change';
export declare class ChangesManager {
    private pageChanges;
    constructor();
    reset(): void;
    addPageChange(pageChange: PageChange): void;
    getPageChanges(): PageChange[];
    getMergedPageChanges(): PageChange[];
}
//# sourceMappingURL=changes-manager.d.ts.map