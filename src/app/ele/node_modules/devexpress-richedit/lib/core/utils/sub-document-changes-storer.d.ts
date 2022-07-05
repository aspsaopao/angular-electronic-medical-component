import { ConstInterval } from '@devexpress/utils/lib/intervals/const';
export declare class SubDocumentChangesStorer {
    private map;
    private static readonly intervalTemplate;
    addChange(subDocumentId: number, interval: ConstInterval): void;
    addChanges(subDocumentId: number, intervals: ConstInterval[]): void;
    finalizeChanges(subDocumentId: number, intervals: ConstInterval[]): ConstInterval[] | null;
    private getSubDocumentIntervals;
}
//# sourceMappingURL=sub-document-changes-storer.d.ts.map