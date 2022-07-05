import { TranslationTablesData } from '../../translation-table/translation-tables-data';
export declare class WriterHelper {
    static convertToHexString(value: number): string;
    static getValueFromTables<ModelT extends number>(table: TranslationTablesData<ModelT>, value: ModelT, defaultValue: ModelT): string;
    static getValueFromTablesExplicitDefault<ModelT extends number>(table: TranslationTablesData<ModelT>, value: ModelT, defaultValue: string): string;
}
//# sourceMappingURL=writer-helper.d.ts.map