import { ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { HeaderFooterCommandBase } from './header-footer-command-base';
export declare class CloseHeaderFooterCommand extends HeaderFooterCommandBase {
    executeCore(_state: SimpleCommandState, _options: ICommandOptions): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
//# sourceMappingURL=close-header-footer-command.d.ts.map