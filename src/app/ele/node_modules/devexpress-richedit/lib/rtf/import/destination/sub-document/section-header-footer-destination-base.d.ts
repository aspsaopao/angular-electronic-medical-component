import { Section } from '../../../../core/model/section/section';
import { SubDocument } from '../../../../core/model/sub-document';
import { RtfImportData } from '../../rtf-import-data';
import { DestinationType } from '../utils/destination-type';
import { DestinationSubDocument } from './destination-sub-document';
export declare abstract class SectionHeaderFooterDestinationBase extends DestinationSubDocument {
    protected get destinationType(): DestinationType;
    readonly section: Section;
    constructor(importer: RtfImportData, section: Section, subDocument: SubDocument);
}
//# sourceMappingURL=section-header-footer-destination-base.d.ts.map