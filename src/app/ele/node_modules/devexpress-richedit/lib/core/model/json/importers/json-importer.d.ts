import { Size } from '@devexpress/utils/lib/geometry/size';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { DocumentModel } from '../../document-model';
import { ControlOptions } from '../../options/control';
import { HeaderFooterSubDocumentInfoBase } from '../../sub-document-infos';
export declare class JSONImporter {
    static importDocumentProperties(documentModel: DocumentModel, content: any): void;
    static importCompatibilitySettings(documentModel: DocumentModel, json: any): void;
    static importModelHeaderFooter<T extends HeaderFooterSubDocumentInfoBase>(modelContainer: T[], jsonContent: any, constr: new (subDocId: number) => T): void;
    static importSections(documentModel: DocumentModel, jsonSections: any): void;
    private static importHeaderFooter;
    static importOptions(controlOptions: ControlOptions, json: any): void;
}
export declare class JSONFixedIntervalConverter {
    static convertFromJSON(obj: any): FixedInterval;
    static convertToJSON(source: FixedInterval): any;
    static convertListToJSON(intervals: FixedInterval[]): any;
    static convertListFromJSON(jsonIntervals: any[]): FixedInterval[];
}
export declare class SizeExporter {
    static convertFromJSON(obj: any): Size;
    static convertToJSON(obj: Size): any;
    static convertToJSONSeparately(width: number, height: number): any;
}
//# sourceMappingURL=json-importer.d.ts.map