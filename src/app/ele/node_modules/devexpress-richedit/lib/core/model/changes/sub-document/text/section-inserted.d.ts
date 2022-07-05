import { Section } from '../../../section/section';
import { ContentInsertedSubDocumentChange } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class SectionInsertedSubDocumentChange extends ContentInsertedSubDocumentChange {
    section: Section;
    sectionIndex: number;
    readonly type = ModelChangeType.SectionInserted;
    constructor(subDocumentId: number, position: number, section: Section, sectionIndex: number);
}
//# sourceMappingURL=section-inserted.d.ts.map