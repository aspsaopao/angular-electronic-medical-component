import { IRichEditControl } from '../interfaces/i-rich-edit-core';
import { RichEditClientCommand } from './client-command';
import { CommandManager } from './command-manager';
import { ICommand } from './i-command';
export declare abstract class ShortcutManager {
    lastCommandExecutedByShortcut: boolean;
    private control;
    private shortcuts;
    private knownNonCommandShortcuts;
    constructor(commandManager: CommandManager, control: IRichEditControl);
    init(commandManager: CommandManager): void;
    protected createShortcut(commandManager: CommandManager, commandId: RichEditClientCommand, winShortcuts: number[], macOSShortcuts: number[]): void;
    processShortcut(keyCode: number): boolean;
    isKnownShortcut(keyCode: number): boolean;
    isClipboardCommandShortcut(keyCode: number): boolean;
    assignShortcut(keyCode: number, callback: () => void): void;
    private denyThisTabKeyCode;
    private static pressTabKeyCode;
}
export declare class CommandHolderBase {
    executeCommand(shortcutManager: ShortcutManager): void;
    protected callExecuteCommand(): void;
    isClipboardCommand(): boolean;
}
export declare class CommandHolder extends CommandHolderBase {
    private command;
    constructor(command: ICommand);
    protected callExecuteCommand(): void;
    isClipboardCommand(): boolean;
}
export declare class UserDefinedFunctionHolder extends CommandHolderBase {
    private userCommandCallback;
    constructor(userCommandCallback: () => void);
    protected callExecuteCommand(): void;
    isClipboardCommand(): boolean;
}
//# sourceMappingURL=shortcut-manager.d.ts.map