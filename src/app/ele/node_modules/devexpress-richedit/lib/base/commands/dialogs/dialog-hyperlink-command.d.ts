import { Field } from '../../../core/model/fields/field';
import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { ICommandOptions } from '../command-base';
import { IntervalCommandState, SimpleCommandState } from '../command-states';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare class DialogHyperlinkCommandBase extends ShowDialogCommandBase<DialogHyperlinkParameters> {
    getState(options?: ICommandOptions): SimpleCommandState;
    getStateValue(): Field;
    isEnabled(options?: ICommandOptions): boolean;
    isVisible(): boolean;
    createParameters(options: ICommandOptions): DialogHyperlinkParameters;
    applyParameters(state: IntervalCommandState, newParams: DialogHyperlinkParameters, initParams: DialogHyperlinkParameters): boolean;
    getField(stateValue: any): Field;
    showCreateHyperlinkItem(): boolean;
    getSelectedField(): Field;
    hasOneSelectedHyperlink(): boolean;
    getDialogName(): string;
}
export declare class DialogCreateOrEditHyperlinkCommand extends DialogHyperlinkCommandBase {
    isEnabled(): boolean;
}
export declare class DialogCreateHyperlinkCommand extends DialogHyperlinkCommandBase {
    isVisible(): boolean;
}
export declare class DialogEditHyperlinkCommand extends DialogHyperlinkCommandBase {
    isVisible(): boolean;
}
export declare class DialogHyperlinkParameters extends DialogParametersBase implements ISupportCopyFrom<DialogHyperlinkParameters>, ICloneable<DialogHyperlinkParameters> {
    url: string;
    text: string;
    tooltip: string;
    anchor: string;
    bookmarkNames: string[];
    canChangeDisplayText: boolean;
    copyFrom(obj: DialogHyperlinkParameters): void;
    clone(): DialogHyperlinkParameters;
    applyConverter(_converter: SimpleConverter<number>): this;
}
//# sourceMappingURL=dialog-hyperlink-command.d.ts.map