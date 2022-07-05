import { UpdateFieldsOptions } from '../../../core/model/fields/tree-creator';
import { UpdateFieldsManipulatorResult } from '../../../core/model/manipulators/fields-manipulator';
import { SubDocumentIntervals } from '../../../core/model/sub-document';
import { CommandBase } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare abstract class UpdateFieldCommandBase extends CommandBase<SimpleCommandState> {
    canModify(): boolean;
    static updateFields(command: CommandBase<any>, updateThisSubDocs: SubDocumentIntervals[], callback: (result: UpdateFieldsManipulatorResult) => void, options: UpdateFieldsOptions): boolean;
}
//# sourceMappingURL=update-field-command-base.d.ts.map