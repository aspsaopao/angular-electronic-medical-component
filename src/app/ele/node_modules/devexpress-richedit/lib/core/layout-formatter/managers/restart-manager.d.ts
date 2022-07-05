import { LayoutPosition } from '../../layout/layout-position';
import { SubDocument } from '../../model/sub-document';
import { FormatterManager } from './formatter-manager';
export declare class RestartManager {
    private manager;
    private layoutFormatterPositionSaver;
    constructor(manager: FormatterManager);
    reset(): void;
    startFormatting(): void;
    restartFromPage(pageIndex: number, minPosition: number, forceRestartFullPage: boolean): void;
    restartFromRow(lp: LayoutPosition, modelPosition: number): void;
    restartHeaderFooter(subDocument: SubDocument, pageIndex: number): void;
    restartAllLayout(): void;
    private restartTemplate;
}
//# sourceMappingURL=restart-manager.d.ts.map