import { CommandBase, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare abstract class GoToStartPageCommandBase extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState, _options: ICommandOptions): boolean;
    protected abstract getNewPageIndex(pageIndex: number): number;
    protected abstract setNewSelection(newPosition: number): any;
}
export declare class GoToStartNextPageCommand extends GoToStartPageCommandBase {
    protected getNewPageIndex(pageIndex: number): number;
    protected setNewSelection(newPosition: number): void;
}
export declare class GoToStartPrevPageCommand extends GoToStartPageCommandBase {
    protected getNewPageIndex(pageIndex: number): number;
    protected setNewSelection(newPosition: number): void;
}
export declare class ExtendGoToStartNextPageCommand extends GoToStartNextPageCommand {
    protected setNewSelection(position: number): void;
}
export declare class ExtendGoToStartPrevPageCommand extends GoToStartPrevPageCommand {
    protected setNewSelection(position: number): void;
}
//# sourceMappingURL=go-to-start-page-command-base.d.ts.map