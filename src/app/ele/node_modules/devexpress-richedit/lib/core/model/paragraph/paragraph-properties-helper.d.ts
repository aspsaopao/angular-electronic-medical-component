import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { IModelManager } from '../../model-manager';
import { InputPositionBase } from '../../selection/input-position-base';
import { SubDocument } from '../sub-document';
import { ParagraphProperties } from './paragraph-properties';
export declare class ParagraphPropertiesApplier {
    private modelManager;
    private modelManip;
    private inputPosition;
    private subDoc;
    private intervals;
    private newParProps;
    private parPropsFull;
    private parPropsRaw;
    private oldParPropsRaw;
    constructor(modelManager: IModelManager, inputPosition: InputPositionBase, newParProps: ParagraphProperties, subDocument: SubDocument, intervals: FixedInterval[]);
    apply(): boolean;
    private applyProp;
}
//# sourceMappingURL=paragraph-properties-helper.d.ts.map