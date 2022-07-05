import { IRichEditControl } from '../interfaces/i-rich-edit-core';
import { RichEditClientCommand } from './client-command';
import { ICommandOptions } from './command-base';
export interface ICommand {
    commandId: RichEditClientCommand;
    control: IRichEditControl;
    getState(): ICommandState;
    execute(isPublicApiCall: boolean, parameter?: ICommandOptions | any): boolean;
}
export interface ICommandState {
    enabled: boolean;
    value: any;
    visible: boolean;
    denyUpdateValue: boolean;
    items: any[];
    checked?: boolean;
}
//# sourceMappingURL=i-command.d.ts.map