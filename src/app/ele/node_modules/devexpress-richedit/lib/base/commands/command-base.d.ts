import { IModelManager } from '../../core/model-manager';
import { ColorProvider } from '../../core/model/color/color-provider';
import { IHistory } from '../../core/model/history/base/i-history';
import { IsModified } from '../../core/model/json/enums/json-top-level-enums';
import { ModelManipulator } from '../../core/model/manipulators/model-manipulator';
import { InsertTextViaHistoryResult } from '../../core/model/manipulators/text-manipulator/text-manipulator';
import { SubDocument, SubDocumentInterval, SubDocumentPosition } from '../../core/model/sub-document';
import { InputPositionBase } from '../../core/selection/input-position-base';
import { SelectionIntervalsInfo } from '../../core/selection/selection-intervals-info';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { IRichEditControl } from '../interfaces/i-rich-edit-core';
import { InputPosition } from '../selection/input-position';
import { Selection } from '../selection/selection';
import { SelectionState } from '../selection/selection-state';
import { RichEditClientCommand } from './client-command';
import { ICommand, ICommandState } from './i-command';
export interface ICommandOptions {
    intervalsInfo: SelectionIntervalsInfo;
    changeSelection: boolean;
    isSetManually: boolean;
    readonly subDocument: SubDocument;
}
export declare class CommandOptions implements ICommandOptions {
    intervalsInfo: SelectionIntervalsInfo;
    changeSelection: boolean;
    isSetManually: boolean;
    get subDocument(): SubDocument;
    protected control: IRichEditControl;
    setChangeSelection(changeSelection: boolean): this;
    setIntervalsInfo(intervalsInfo: SelectionIntervalsInfo): this;
    constructor(control: IRichEditControl);
}
export declare class CommandSimpleOptions<T> extends CommandOptions {
    param: T;
    constructor(control: IRichEditControl, parameter: T);
}
export declare abstract class CommandBase<T extends ICommandState> implements ICommand {
    commandId: RichEditClientCommand;
    control: IRichEditControl;
    get modelManipulator(): ModelManipulator;
    get selection(): Selection;
    get history(): IHistory;
    get inputPosition(): InputPosition;
    constructor(control: IRichEditControl);
    get colorProvider(): ColorProvider;
    abstract getState(options?: ICommandOptions): T;
    protected getRelatedCommands(): Record<number, boolean>;
    execute(isPublicApiCall: boolean, parameter?: ICommandOptions | any): boolean;
    protected afterExecute(): void;
    protected beforeExecute(): void;
    protected convertToCommandOptions(parameter?: ICommandOptions | any): CommandOptions;
    updateControlState(): void;
    executeCore(_state: T, _options: ICommandOptions): boolean;
    isEnabled(_options?: ICommandOptions): boolean;
    lockBarHolderUpdate(_prevModifiedState: IsModified): boolean;
    lockInputPositionUpdating(_prevModifiedState: IsModified): boolean;
    isEnabledInReadOnlyMode(): boolean;
    isEnabledInClosedDocument(): boolean;
    protected canModify(): boolean;
    protected getIntervalsForModifying(): FixedInterval[];
    protected getFloatingObjectParentSubDocument(): SubDocument;
    DEPRECATEDConvertOptionsParameter(parameter: any): any;
    protected DEPRECATEDCorrectlMainCommandOptions(_options: ICommandOptions): void;
    static addSelectionBefore(control: IRichEditControl): void;
    static addSelectionAfter(control: IRichEditControl, endPos: number, customSelection?: (newState: SelectionState) => void): void;
    protected addSelectionBefore(): void;
    protected addSelectionAfter(endPos: number, customSelection?: (newState: SelectionState) => void): void;
    protected insertText(subDocInterval: SubDocumentInterval, text: string): InsertTextViaHistoryResult;
    protected insertTextWithSelection(subDocInterval: SubDocumentInterval, text: string): void;
    protected insertSomeWithSelection(subDocInterval: SubDocumentInterval, insertAction: (subDocPosition: SubDocumentPosition) => number): void;
    static replaceTextByParagraph(modelManager: IModelManager, inputPosition: InputPositionBase, subDocInterval: SubDocumentInterval): FixedInterval;
}
//# sourceMappingURL=command-base.d.ts.map