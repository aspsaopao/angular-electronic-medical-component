import { MLTableData } from './ml-table-data';
export declare class TranslationTablesData<TModelValue extends number> {
    importMap: Record<string, MLTableData<TModelValue>>;
    exportMap: Record<number, MLTableData<TModelValue>>;
    getValueOnImport(key: string, defaultValue: TModelValue): TModelValue;
}
//# sourceMappingURL=translation-tables-data.d.ts.map