import { MaskedCharacterProperties } from '../../../../core/model/character/character-properties';
import { Data } from '../../data';
import { ElementHandlerTable } from '../destination';
import { RunPropertiesBaseDestination } from './run-properties-base-destination';
export declare class RunPropertiesDestination extends RunPropertiesBaseDestination {
    static handlerTable: ElementHandlerTable;
    constructor(data: Data, charProps: MaskedCharacterProperties);
    protected get elementHandlerTable(): ElementHandlerTable;
}
//# sourceMappingURL=run-properties-destination.d.ts.map