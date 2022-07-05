import { ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { HeaderFooterCommandBase } from './header-footer-command-base';
export declare abstract class GoToNextPrevHeaderFooterCommandBase extends HeaderFooterCommandBase {
    executeCore(_state: SimpleCommandState, _options: ICommandOptions): boolean;
    protected abstract moveFunction(pageIndex: number): number;
}
export declare class GoToNextHeaderFooterCommand extends GoToNextPrevHeaderFooterCommandBase {
    protected moveFunction(pageIndex: number): number;
}
export declare class GoToPreviousHeaderFooterCommand extends GoToNextPrevHeaderFooterCommandBase {
    protected moveFunction(pageIndex: number): number;
}
//# sourceMappingURL=go-to-prev-next-header-footer-command.d.ts.map