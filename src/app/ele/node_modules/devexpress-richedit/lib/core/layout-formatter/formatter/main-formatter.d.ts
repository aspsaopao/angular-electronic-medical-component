import { Rectangle } from '@devexpress/utils/lib/geometry/rectangle';
import { LayoutPosition } from '../../layout/layout-position';
import { LayoutPage } from '../../layout/main-structures/layout-page';
import { FormatterManager } from '../managers/formatter-manager';
import { BaseFormatter } from './base-formatter';
import { LayoutFormatterState } from './enums';
import { LastRowInfo } from './utils/last-row-info';
export declare class MainFormatter extends BaseFormatter {
    private static notAllowBreakOnState;
    constructor(formatterManager: FormatterManager);
    formatNext(): boolean;
    private processStateDocumentStart;
    private processStatePageStart;
    private calculatePageOrdinal;
    private processStatePageAreaEnd;
    private processStatePageEnd;
    private processStateDocumentEnd;
    private processStateEnd;
    private copyFlagsFromOldPage;
    private createNextPage;
    private tryReusePage;
    private getTableRestartPosition;
    private getLastWidowTableColumn;
    private getWidowTableLastColumnIndex;
    private formatOtherHeaderFooterPageArea;
    setParamsForRestart(state: LayoutFormatterState, newLp: LayoutPosition, newLastRowInfo: LastRowInfo, resetTableFormatter: boolean): void;
    setBoundsForRestart(pageAreaBounds: Rectangle, columnBounds: Rectangle[]): void;
    static correctPageOffsets(page: LayoutPage): void;
}
//# sourceMappingURL=main-formatter.d.ts.map