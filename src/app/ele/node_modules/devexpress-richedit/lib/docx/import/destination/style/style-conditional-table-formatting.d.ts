import { ConditionalTableStyleFormatting } from '../../../../core/model/tables/secondary-structures/table-base-structures';
import { XmlReader } from '../../../zip/xml-reader';
import { ElementHandlerTable } from '../destination';
import { StyleDestinationBase } from './style-destination-base';
export declare class StyleConditionalTableFormatting extends StyleDestinationBase {
    static condtionTypesTable: Record<string, ConditionalTableStyleFormatting>;
    private conditionType;
    protected get elementHandlerTable(): ElementHandlerTable;
    processElementOpen(reader: XmlReader): Promise<void>;
    processElementClose(reader: XmlReader): void;
}
//# sourceMappingURL=style-conditional-table-formatting.d.ts.map