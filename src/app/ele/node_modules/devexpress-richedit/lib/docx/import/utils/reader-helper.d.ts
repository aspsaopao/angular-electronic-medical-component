import { LangInfo } from '../../../core/model/character/lang-info';
import { MLTableData } from '../../translation-table/ml-table-data';
import { XmlReader } from '../../zip/xml-reader';
import { Data } from '../data';
export declare class ReaderHelper {
    data: Data;
    constructor(data: Data);
    searchInTable<T>(value: string, table: Record<string, MLTableData<T>>, defaultValue: T, extendedSearch?: boolean): T;
    readAttribute(reader: XmlReader, attributeName: string): string;
    readAttributeWithNs(reader: XmlReader, attributeName: string, ns: string): string;
    isBool(value: string): boolean;
    isBoolStrict(value: string): boolean;
    decodeXmlChars(val: string): string;
    getWpSTOnOffValue(reader: XmlReader, attributeName: string, defaultValue?: boolean): boolean;
    getOnOffValue(reader: XmlReader, attributeName: string, defaultValue?: boolean): boolean;
    getOnOffValueBool(value: string, defaultValue: boolean): boolean;
    getWpSTOnOffNullValue(reader: XmlReader, attributeName: string): boolean | null;
    getWpSTIntegerValue(reader: XmlReader, attributeName: string, defaultValue?: number, radix?: 10 | 16): number;
    getIntegerValueInPoints(reader: XmlReader, attributeName: string, defaultValue: number): number;
    getIntegerValue(reader: XmlReader, attributeName: string, defaultValue: number): number;
    private parseIntStrict;
    private parseFloatStrict;
    getIntegerValueCore(value: string, defaultValue: number, radix?: 10 | 16): number;
    getIntegerNullableValue(reader: XmlReader, attr: string): number;
    getFloatValueInPoints(reader: XmlReader, attributeName: string, defaultValue: number): number;
    getFloatValue(value: string, defaultValue: number): number;
    getWpEnumValue<T>(reader: XmlReader, attributeName: string, table: Record<string, MLTableData<T>>, defaultValue: T, ns?: string): T;
    getWpEnumValueCore<T>(value: string, table: Record<string, MLTableData<T>>, defaultValue: T): T;
    getWpEnumOnOffNullValue<T>(reader: XmlReader, attributeName: string, table: Record<string, MLTableData<T>>): T | null;
    getWpSTColorOrNullValue(reader: XmlReader, attributeName: string): number | null;
    getWpSTColorValue(reader: XmlReader, attributeName: string, defaultValue?: number): number;
    parseColor(value: string, defaultValue: number): number;
    convertToInt(value: string): number;
    readLanguage(reader: XmlReader): LangInfo;
    private getWpEnumOnOffNullValueCore;
    private createCultureInfoFromString;
}
//# sourceMappingURL=reader-helper.d.ts.map