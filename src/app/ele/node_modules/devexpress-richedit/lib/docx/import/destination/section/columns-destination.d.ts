import { SectionColumnProperties } from '../../../../core/model/section/section-column-properties';
import { SectionProperties } from '../../../../core/model/section/section-properties';
import { XmlReader } from '../../../zip/xml-reader';
import { Data } from '../../data';
import { ElementDestination, ElementHandlerTable } from '../destination';
export declare class ColumnsDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    protected get secProps(): SectionProperties;
    static handlerTable: ElementHandlerTable;
    columnInfos: SectionColumnProperties[];
    static onColumn(data: Data): ElementDestination;
    protected static getThis(data: Data): ColumnsDestination;
    processElementOpen(reader: XmlReader): Promise<void>;
    processElementClose(_reader: XmlReader): void;
}
//# sourceMappingURL=columns-destination.d.ts.map