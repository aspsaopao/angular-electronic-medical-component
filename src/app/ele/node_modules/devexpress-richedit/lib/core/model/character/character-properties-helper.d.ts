import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { IModelManager } from '../../model-manager';
import { InputPositionBase } from '../../selection/input-position-base';
import { SubDocument } from '../sub-document';
import { CharacterProperties } from './character-properties';
export declare class CharacterPropertiesApplier {
    private modelManager;
    private inputPosition;
    private newCharProps;
    private maskedCharProps;
    private charPropsRaw;
    private oldCharPropsRaw;
    private charPropsFull;
    private intervals;
    private modelManip;
    private subDoc;
    constructor(modelManager: IModelManager, inputPosition: InputPositionBase, newCharProps: CharacterProperties, subDocument: SubDocument, intervals: FixedInterval[]);
    apply(): boolean;
    private applyProp;
}
//# sourceMappingURL=character-properties-helper.d.ts.map