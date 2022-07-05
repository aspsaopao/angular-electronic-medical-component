import { RtfOldListLevelInfo } from '../../model/numbering-lists/rtf-old-list-level-info';
import { RtfImportData } from '../../rtf-import-data';
import { DestinationBase } from '../base/destination';
import { DestinationType } from '../utils/destination-type';
import { DestinationOldParagraphNumberingBase } from './destination-old-paragraph-numbering-base';
export declare class DestinationOldSectionNumberingLevel extends DestinationOldParagraphNumberingBase {
    protected get destinationType(): DestinationType;
    readonly levelNumber: number;
    constructor(importer: RtfImportData, levelNumber: number);
    protected createClone(): DestinationBase;
    beforePopRtfState(): void;
    createRtfOldListLevelInfo(): RtfOldListLevelInfo;
}
//# sourceMappingURL=destination-old-section-numbering-level.d.ts.map