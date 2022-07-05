import { Options as dxFormOptions } from 'devextreme/ui/form';
import { DialogHyperlinkParameters } from '../../base/commands/dialogs/dialog-hyperlink-command';
import { DialogBase } from './dialog-base';
export declare class HyperlinkDialog extends DialogBase<DialogHyperlinkParameters> {
    private readonly mailtoPrefix;
    private readonly subjectPrefix;
    private tabPanel;
    protected getTitle(): string;
    protected getMaxWidth(): number;
    protected getFormOptions(): dxFormOptions;
    private isLinkMailTo;
    private getSubject;
    private getEmail;
    protected updateParameters(parameters: DialogHyperlinkParameters, data: any): void;
}
//# sourceMappingURL=hyperlink-dialog.d.ts.map