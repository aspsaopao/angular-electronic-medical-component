import { Field } from '../../core/model/fields/field';
import { SubDocument } from '../../core/model/sub-document';
import { IProcessor } from '../../core/processor';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { FieldApi } from '../field';
import { IInterval, IntervalApi } from '../interval';
import { Collection } from './collection';
export declare class FieldCollection extends Collection<FieldApi, Field> {
    protected _subDocument: SubDocument;
    constructor(processor: IProcessor, subDocument: SubDocument);
    create(position: number | IntervalApi, code?: string): FieldApi;
    createMergeField(position: number, name: string): FieldApi;
    find(position: number | IInterval): FieldApi[];
    showAllFieldResults(doInAllSubDocuments?: boolean): void;
    showAllFieldCodes(doInAllSubDocuments?: boolean): void;
    updateAllFields(callback?: () => void, options?: UpdateFieldsOptionsApi): boolean;
    private _showAllFieldCodesCore;
    protected _getItem(coreItem: Field): FieldApi;
    protected _getCoreItems(): Field[];
}
export declare class UpdateFieldsOptionsApi {
    doInAllSubDocuments: boolean;
    updateTocFields: boolean;
    constructor(doInAllSubDocuments?: boolean, updateTocFields?: boolean);
}
export declare function findFields(fields: Field[], interval: FixedInterval): Field[];
//# sourceMappingURL=field-collection.d.ts.map