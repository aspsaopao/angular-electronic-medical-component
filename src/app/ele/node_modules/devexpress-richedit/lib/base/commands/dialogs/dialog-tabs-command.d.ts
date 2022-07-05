import { TabProperties } from '../../../core/model/paragraph/paragraph-style';
import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare class DialogTabsCommand extends ShowDialogCommandBase<DialogTabsParameters> {
    createParameters(_options: ICommandOptions): DialogTabsParameters;
    applyParameters(_state: SimpleCommandState, newParams: DialogTabsParameters, initParams: DialogTabsParameters): boolean;
    deleteAllTabs(): void;
    paragraphsHasEqualTabProperties(paragraphIndices: number[]): boolean;
    getDialogName(): string;
}
export declare class DialogTabsParameters extends DialogParametersBase implements ISupportCopyFrom<DialogTabsParameters>, ICloneable<DialogTabsParameters> {
    defaultTabStop: number;
    tabProperties: TabProperties;
    copyFrom(obj: DialogTabsParameters): void;
    clone(): DialogTabsParameters;
    applyConverter(converter: SimpleConverter<number>): this;
}
//# sourceMappingURL=dialog-tabs-command.d.ts.map