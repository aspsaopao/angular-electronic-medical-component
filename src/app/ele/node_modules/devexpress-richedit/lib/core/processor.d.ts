import { IBatchUpdatableObject } from '@devexpress/utils/lib/class/batch-updatable';
import { FormatterManager } from './layout-formatter/managers/formatter-manager';
import { IModelManager } from './model-manager';
import { FieldRequestManager } from './model/fields/field-request-manager';
import { ISelectionBase } from './selection/selection-base';
export interface IProcessor extends IBatchUpdatableObject {
    selection: ISelectionBase;
    modelManager: IModelManager;
    layoutFormatterManager: FormatterManager;
    createFieldRequestManager(): FieldRequestManager;
    invalidateLayoutAfterFontsLoaded(): any;
}
//# sourceMappingURL=processor.d.ts.map