import { SubDocument } from '../../../../../core/model/sub-document';
import { XmlReader } from '../../../../zip/xml-reader';
import { LeafElementDestination } from '../../destination';
export declare abstract class HeaderFooterReferenceDestinationBase extends LeafElementDestination {
    processElementOpen(reader: XmlReader): Promise<void>;
    processElementClose(_reader: XmlReader): void;
    protected abstract isHeader(): boolean;
    protected createSubDocument(type: string): SubDocument;
}
export declare class FooterReferenceDestination extends HeaderFooterReferenceDestinationBase {
    protected isHeader(): boolean;
}
export declare class HeaderReferenceDestination extends HeaderFooterReferenceDestinationBase {
    protected isHeader(): boolean;
}
//# sourceMappingURL=header-footer-reference-destination-base.d.ts.map