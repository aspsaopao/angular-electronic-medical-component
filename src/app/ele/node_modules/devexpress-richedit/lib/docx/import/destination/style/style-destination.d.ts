import { StyleBase } from '../../../../core/model/style-base';
import { XmlReader } from '../../../zip/xml-reader';
import { StyleManager } from '../../importers/styles-importer';
import { ElementHandlerTable } from '../destination';
import { StyleDestinationBase } from './style-destination-base';
export declare class StyleDestination extends StyleDestinationBase {
    static readonly handlerTable: ElementHandlerTable;
    get currImporter(): StyleManager<StyleBase<any>>;
    protected get elementHandlerTable(): ElementHandlerTable;
    processElementOpen(reader: XmlReader): Promise<void>;
    processElementClose(reader: XmlReader): void;
}
//# sourceMappingURL=style-destination.d.ts.map