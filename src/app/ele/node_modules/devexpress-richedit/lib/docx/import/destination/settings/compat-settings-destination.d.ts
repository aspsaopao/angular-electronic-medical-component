import { CompatSettings } from '../../../../core/model/compat-settings';
import { XmlReader } from '../../../zip/xml-reader';
import { ElementDestination, ElementHandlerTable, LeafElementDestination } from '../destination';
export declare class DocumentSettingsCompatDestination extends ElementDestination {
    static handlerTable: ElementHandlerTable;
    protected get elementHandlerTable(): ElementHandlerTable;
}
export declare class DocumentSettingsCompatSettingDestination extends LeafElementDestination {
    processElementOpen(reader: XmlReader): Promise<void>;
    processSetting(reader: XmlReader, prop: CompatSettings): void;
}
//# sourceMappingURL=compat-settings-destination.d.ts.map