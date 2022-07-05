import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { LayoutPage } from '../../layout/main-structures/layout-page';
import { DocumentModel } from '../document-model';
import { Position } from '../position/position';
import { SubDocument } from '../sub-document';
import { SectionFooters, SectionHeaders } from './header-footer';
import { SectionProperties } from './section-properties';
export declare class Section {
    startLogPosition: Position;
    private length;
    sectionProperties: SectionProperties;
    documentModel: DocumentModel;
    headers: SectionHeaders;
    footers: SectionFooters;
    constructor(documentModel: DocumentModel, startLogPosition: Position, length: number, sectionProperties: SectionProperties);
    getLength(): number;
    setLength(subDocument: SubDocument, newLength: number): void;
    getEndPosition(): number;
    static getPageSectionIndex(layoutPage: LayoutPage, sections: Section[]): number;
    get interval(): FixedInterval;
    cloneToNewModel(model: DocumentModel): Section;
}
//# sourceMappingURL=section.d.ts.map