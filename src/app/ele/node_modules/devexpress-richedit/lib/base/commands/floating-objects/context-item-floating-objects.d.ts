import { CommandBase, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ContextItemFloatingObjects extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    canModify(): boolean;
    executeCore(_state: SimpleCommandState, _parameter: ICommandOptions): boolean;
}
export declare class ChangeFloatingObjectTextWrapTypeMenu extends ContextItemFloatingObjects {
}
export declare class FloatingObjectBringForwardMenu extends ContextItemFloatingObjects {
}
export declare class FloatingObjectSendBackwardMenu extends ContextItemFloatingObjects {
}
//# sourceMappingURL=context-item-floating-objects.d.ts.map