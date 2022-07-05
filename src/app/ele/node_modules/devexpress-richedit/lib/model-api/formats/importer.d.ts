import { DocumentFormat } from '../../core/document-format';
import { IDocumentImporter } from '../../core/formats/i-document-importer';
import { RichOptions } from '../../core/model/options/rich-options';
import { SubDocument } from '../../core/model/sub-document';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { IProcessor } from '../../core/processor';
export declare function createImporter(format: DocumentFormat, throwInvalidFile?: (reason: string) => void): IDocumentImporter | null;
export declare function insertRtfInSubDocumentPublic(processor: IProcessor, subDocument: SubDocument, position: number, rtf: string, callback: (interval: FixedInterval, isRtfValid: boolean) => void): void;
export declare function insertContentInSubDocumentPublic(processor: IProcessor, subDocument: SubDocument, position: number, content: string | File | Blob | ArrayBuffer, documentFormat: DocumentFormat, callback: (interval: FixedInterval, isRtfValid: boolean) => void): void;
export declare function getRtfFromSubDocumentPublic(richOptions: RichOptions, subDocument: SubDocument, coreInterval: FixedInterval): string;
//# sourceMappingURL=importer.d.ts.map