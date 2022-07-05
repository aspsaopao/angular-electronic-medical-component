import { Size } from '@devexpress/utils/lib/geometry/size';
import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare class DialogInsertImageCommand extends ShowDialogCommandBase<InsertImageDialogParameters> {
    constructor(control: IRichEditControl);
    isEnabled(): boolean;
    createParameters(_options: ICommandOptions): InsertImageDialogParameters;
    applyParameters(_state: SimpleCommandState, newParams: InsertImageDialogParameters): boolean;
    getDialogName(): string;
}
export declare class InsertImageDialogParameters extends DialogParametersBase implements ISupportCopyFrom<InsertImageDialogParameters>, ICloneable<InsertImageDialogParameters> {
    id: number;
    base64EncodedImage: string;
    originalSize: Size;
    copyFrom(obj: InsertImageDialogParameters): void;
    clone(): InsertImageDialogParameters;
    applyConverter(_converter: SimpleConverter<number>): this;
}
//# sourceMappingURL=dialog-insert-image-command.d.ts.map