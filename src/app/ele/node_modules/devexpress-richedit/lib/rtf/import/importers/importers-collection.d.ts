import { RtfImportData } from '../rtf-import-data';
import { RtfBookmarkImporter } from './bookmark-importer';
import { RtfCharacterImporter } from './character-importer';
import { RtfCommentsImporter } from './comments-importer';
import { RtfFieldImporter } from './field-importer';
import { RtfFontImporter } from './font-importer';
import { RtfImageImporter } from './image-importer';
import { NumberingListsImporter } from './numbering-lists-importer';
import { RtfParagraphImporter } from './paragraph-importer';
import { RtfRangePermissionImporter } from './range-permission-importer';
import { RtfSectionImporter } from './section-importer';
import { RtfShapeImporter } from './shape-importer';
import { RtfStylesImporter } from './styles-importer';
import { RtfTableImporter } from './table-importer';
export declare class ImportersCollection {
    readonly style: RtfStylesImporter;
    readonly paragraph: RtfParagraphImporter;
    readonly section: RtfSectionImporter;
    readonly numbering: NumberingListsImporter;
    readonly character: RtfCharacterImporter;
    readonly image: RtfImageImporter;
    readonly field: RtfFieldImporter;
    readonly bookmark: RtfBookmarkImporter;
    readonly rangePermission: RtfRangePermissionImporter;
    readonly comment: RtfCommentsImporter;
    readonly font: RtfFontImporter;
    readonly table: RtfTableImporter;
    readonly shape: RtfShapeImporter;
    private readonly importers;
    constructor(data: RtfImportData);
    pushState(): void;
    popState(): void;
    startImportSubDocument(): void;
    finalizeSubDocument(): void;
}
//# sourceMappingURL=importers-collection.d.ts.map