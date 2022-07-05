import { ClientRichEdit } from '../../client-rich-edit';
export declare class MailMergeOptionsApi {
    private _native;
    constructor(native: ClientRichEdit);
    getDataSource(): any;
    setDataSource(dataSource: any, callback?: (success: boolean) => void): void;
    get activeRecordIndex(): number;
    set activeRecordIndex(value: number);
    get viewMergedData(): boolean;
    set viewMergedData(value: boolean);
}
//# sourceMappingURL=mail-merge-options.d.ts.map