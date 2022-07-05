import { ICommandOptions } from '../command-base';
import { ICommandState } from '../i-command';
import { SelectionCommandBase } from './selection-command-base';
export declare abstract class GoToPrevPageCommandBase extends SelectionCommandBase {
    getPosition(): number;
    abstract extendSelection(): boolean;
    isEnabled(): boolean;
}
export declare class GoToPrevPageCommand extends GoToPrevPageCommandBase {
    executeCore(_state: ICommandState, _options: ICommandOptions): boolean;
    extendSelection(): boolean;
}
export declare class ExtendGoToPrevPageCommand extends GoToPrevPageCommandBase {
    executeCore(_state: ICommandState, _options: ICommandOptions): boolean;
    extendSelection(): boolean;
}
//# sourceMappingURL=go-to-prev-page-command.d.ts.map