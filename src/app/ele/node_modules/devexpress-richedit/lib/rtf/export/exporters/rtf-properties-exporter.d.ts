import { BorderInfo } from '../../../core/model/borders/border-info';
import { BorderLineStyle } from '../../../core/model/borders/enums';
import { DocumentModel } from '../../../core/model/document-model';
import { TableWidthUnit } from '../../../core/model/tables/secondary-structures/table-units';
import { RtfExportHelper } from '../helpers/rtf-export-helper';
import { RtfBuilder } from '../rtf-builder';
export declare abstract class RtfPropertiesExporter {
    readonly rtfExportHelper: RtfExportHelper;
    readonly rtfBuilder: RtfBuilder;
    readonly documentModel: DocumentModel;
    constructor(documentModel: DocumentModel, rtfExportHelper: RtfExportHelper, rtfBuilder: RtfBuilder);
    protected writeBoolCommand(command: string, value: boolean): void;
    writeBorderProperties(border: BorderInfo): void;
    writeBorderWidth(value: number, defaultValue: number): void;
    writeBorderStyle(value: BorderLineStyle): void;
    writeWidthUnit(unit: TableWidthUnit, typeKeyword: string, valueKeyword: string, writeValueAnyway?: boolean): void;
    protected writeWidthUnitInTwips(unit: TableWidthUnit, typeKeyword: string, valueKeyword: string): void;
    shouldExportCellMargin(marginUnit: TableWidthUnit): boolean;
}
//# sourceMappingURL=rtf-properties-exporter.d.ts.map