import { ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { HeaderFooterCommandBase } from './header-footer-command-base';
export declare class GoToHeaderFooterCommandBase extends HeaderFooterCommandBase {
    executeCore(_state: SimpleCommandState, _options: ICommandOptions): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
export declare class GoToHeaderCommand extends GoToHeaderFooterCommandBase {
    isEnabled(): boolean;
}
export declare class GoToFooterCommand extends GoToHeaderFooterCommandBase {
    isEnabled(): boolean;
}
//# sourceMappingURL=go-to-header-footer-command.d.ts.map