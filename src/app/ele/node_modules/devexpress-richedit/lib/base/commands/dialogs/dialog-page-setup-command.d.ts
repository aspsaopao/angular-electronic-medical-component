import { SectionStartType } from '../../../core/model/section/enums';
import { SectionProperties } from '../../../core/model/section/section-properties';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { CommandOptions, ICommandOptions } from '../command-base';
import { IntervalCommandStateEx } from '../command-states';
import { ICommandState } from '../i-command';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
import { PaperKind } from '../../../core/model/section/paper-kind';
export declare class DialogPageSetupCommand extends ShowDialogCommandBase<PageSetupDialogParameters> {
    protected getRelatedCommands(): Record<number, boolean>;
    getState(options?: CommandOptions): ICommandState;
    isEnabled(): boolean;
    createParameters(_options: ICommandOptions): PageSetupDialogParameters;
    applyParameters(_state: IntervalCommandStateEx, newParams: PageSetupDialogParameters, initParams: PageSetupDialogParameters): boolean;
    getInterval(applyTo: SectionPropertiesApplyType): FixedInterval;
    getInitInterval(): FixedInterval;
    getInitialTab(): PageSetupDialogTab;
    getDialogName(): string;
}
export declare class ShowPagePaperSetupFormCommand extends DialogPageSetupCommand {
    getInitialTab(): PageSetupDialogTab;
}
export declare class PageSetupDialogParameters extends DialogParametersBase implements ISupportCopyFrom<PageSetupDialogParameters>, ICloneable<PageSetupDialogParameters> {
    marginTop: number;
    marginBottom: number;
    marginLeft: number;
    marginRight: number;
    landscape: boolean;
    applyTo: SectionPropertiesApplyType;
    pageWidth: number;
    pageHeight: number;
    startType: SectionStartType;
    headerDifferentOddAndEven: boolean;
    headerDifferentFirstPage: boolean;
    headerOffset: number;
    footerOffset: number;
    paperKind: PaperKind;
    initialTab: PageSetupDialogTab;
    init(initSecProps: SectionProperties, tabs: PageSetupDialogTab, differentOddAndEvenPages: boolean): void;
    copyFrom(obj: PageSetupDialogParameters): void;
    clone(): PageSetupDialogParameters;
    applyConverter(converter: SimpleConverter<number>): this;
}
export declare enum SectionPropertiesApplyType {
    WholeDocument = 0,
    CurrentSection = 1,
    SelectedSections = 2,
    ThisPointForward = 4
}
export declare enum PageSetupDialogTab {
    Margins = 0,
    Paper = 1,
    Layout = 2
}
//# sourceMappingURL=dialog-page-setup-command.d.ts.map