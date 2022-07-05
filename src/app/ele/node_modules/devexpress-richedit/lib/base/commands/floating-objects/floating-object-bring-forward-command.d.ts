import { CommandBase, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class FloatingObjectBringForwardBackwardCommandBase extends CommandBase<SimpleCommandState> {
    protected isBehindDoc(): boolean;
    getState(): SimpleCommandState;
    canModify(): boolean;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, _parameter: ICommandOptions): boolean;
}
export declare class FloatingObjectBringForwardCommand extends FloatingObjectBringForwardBackwardCommandBase {
    executeCore(_state: SimpleCommandState, _parameter: ICommandOptions): boolean;
}
export declare class FloatingObjectBringToFrontCommand extends FloatingObjectBringForwardBackwardCommandBase {
    executeCore(_state: SimpleCommandState, _parameter: ICommandOptions): boolean;
}
export declare class FloatingObjectSendBackwardCommand extends FloatingObjectBringForwardBackwardCommandBase {
    executeCore(_state: SimpleCommandState, _parameter: ICommandOptions): boolean;
}
export declare class FloatingObjectSendToBackCommand extends FloatingObjectBringForwardBackwardCommandBase {
    executeCore(_state: SimpleCommandState, _parameter: ICommandOptions): boolean;
}
export declare class FloatingObjectBringInFrontOfTextCommand extends FloatingObjectBringForwardBackwardCommandBase {
    protected isBehindDoc(): boolean;
}
export declare class FloatingObjectSendBehindTextCommand extends FloatingObjectBringForwardBackwardCommandBase {
    protected isBehindDoc(): boolean;
}
//# sourceMappingURL=floating-object-bring-forward-command.d.ts.map