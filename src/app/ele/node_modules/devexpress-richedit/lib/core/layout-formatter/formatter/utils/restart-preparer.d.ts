import { LayoutPosition } from '../../../layout/layout-position';
import { LayoutPage } from '../../../layout/main-structures/layout-page';
import { SubDocument } from '../../../model/sub-document';
import { FormatterManager } from '../../managers/formatter-manager';
export declare class RestartPreparer {
    private manager;
    constructor(manager: FormatterManager);
    private restartCommonPart;
    restartFromPage(pageIndex: number, isRestartNow: boolean, resetTableFormatter: boolean): void;
    private calcRestartPosition;
    restartHeaderFooterInternal(subDocument: SubDocument, pageIndex: number): void;
    restartFormatingAllLayout(): void;
    restartByAnchoredObject(page: LayoutPage): void;
    restartFromRow(lp: LayoutPosition, modelPosition: number, isRestartNow: boolean, removePrevAncObjects?: boolean): void;
    private setBoundsCalculatorState;
    private createNewLayoutPage;
}
//# sourceMappingURL=restart-preparer.d.ts.map