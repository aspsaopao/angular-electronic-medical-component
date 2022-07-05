import { DocumentModel } from '../../../core/model/document-model';
import { SubDocument } from '../../../core/model/sub-document';
import { Stack } from '@devexpress/utils/lib/class/stack';
import { RtfImportData } from '../rtf-import-data';
export declare abstract class RtfBaseImporter {
    data: RtfImportData;
    constructor(data: RtfImportData);
    get documentModel(): DocumentModel;
    get subDocument(): SubDocument;
    abstract pushState(): any;
    abstract popState(): any;
    abstract startImportSubDocument(): any;
    abstract finalizeSubDocument(): any;
    protected applyState<T>(states: Stack<T>, state: T): void;
}
//# sourceMappingURL=importer-base.d.ts.map