import { Section } from '../../../core/model/section/section';
import { SectionProperties } from '../../../core/model/section/section-properties';
import { Data } from '../data';
export declare class SectionImporter {
    data: Data;
    properties: SectionProperties;
    shouldInsertSection: boolean;
    section: Section;
    constructor(data: Data);
    insertSection(): void;
    finishSection(): void;
    private createSection;
    private getDefaultSectionProperties;
}
//# sourceMappingURL=section-importer.d.ts.map