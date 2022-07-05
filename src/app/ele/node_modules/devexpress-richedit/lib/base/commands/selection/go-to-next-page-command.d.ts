import { ICommandState } from '../i-command';
import { SelectionCommandBase } from './selection-command-base';
export declare abstract class GoToNextPageCommandBase extends SelectionCommandBase {
    getPosition(): number;
    abstract extendSelection(): boolean;
    isEnabled(): boolean;
}
export declare class GoToNextPageCommand extends GoToNextPageCommandBase {
    executeCore(_state: ICommandState, _parameter: any): boolean;
    extendSelection(): boolean;
}
export declare class ExtendGoToNextPageCommand extends GoToNextPageCommandBase {
    executeCore(_state: ICommandState, _parameter: any): boolean;
    extendSelection(): boolean;
}
//# sourceMappingURL=go-to-next-page-command.d.ts.map