import { CommandManager } from '../../../base/commands/command-manager';
import { CommandId } from './enum';
export declare class CommandState {
    readonly visible: boolean;
    readonly enabled: boolean;
    readonly value?: any;
    constructor(visible: boolean, enabled: boolean, value?: any);
}
export declare function executeApiCommand(commandManager: CommandManager, commandId: CommandId, parameter?: any): boolean;
export declare function getApiCommandState(commandManager: CommandManager, commandId: CommandId): CommandState | null;
//# sourceMappingURL=commands.d.ts.map