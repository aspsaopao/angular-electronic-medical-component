import { ImportCommentInfo } from '../../../core/formats/utils/import-comment-info';
import { SubDocument } from '../../../core/model/sub-document';
import { Table } from '../../../core/model/tables/main-structures/table';
import { Stack } from '@devexpress/utils/lib/class/stack';
import { Data } from '../data';
import { BookmarkImporter } from '../importers/bookmark-importer';
import { CharacterImporter } from '../importers/character-importer';
import { CommentsImporter } from '../importers/comments-importer';
import { FieldImporter } from '../importers/field-importer';
import { ParagraphImporter } from '../importers/paragraph-importer';
import { PositionImporter } from '../importers/position-importer';
import { RangePermissionImporter } from '../importers/range-permission-importer';
import { TableImporter } from '../importers/table-importer';
import { ImportFieldInfo } from './import-field-info';
export declare class ImportSubDocumentInfo {
    subDocument: SubDocument;
    readonly comments: Record<string, ImportCommentInfo>;
    activeComment: ImportCommentInfo;
    readonly tableStack: Stack<Table>;
    readonly fieldInfoStack: Stack<ImportFieldInfo>;
    readonly bookmarkImporter: BookmarkImporter;
    readonly commentsImporter: CommentsImporter;
    readonly fieldImporter: FieldImporter;
    readonly rangePermissionImporter: RangePermissionImporter;
    readonly tableImporter: TableImporter;
    readonly paragraphImporter: ParagraphImporter;
    readonly characterImporter: CharacterImporter;
    readonly positionImporter: PositionImporter;
    private data;
    constructor(data: Data, subDocument: SubDocument, comments?: Record<string, ImportCommentInfo>, activeComment?: ImportCommentInfo);
    endImport(): void;
}
//# sourceMappingURL=import-sub-document-info.d.ts.map