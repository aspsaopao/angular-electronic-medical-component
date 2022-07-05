import { MaskedCharacterProperties } from '../../../../core/model/character/character-properties';
import { Data } from '../../data';
import { ElementDestination, ElementHandlerTable } from '../destination';
export declare abstract class RunPropertiesBaseDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static readonly handlerTable: ElementHandlerTable;
    characterProperties: MaskedCharacterProperties;
    constructor(data: Data, characterProperties: MaskedCharacterProperties);
    private static getCharacterProperties;
}
//# sourceMappingURL=run-properties-base-destination.d.ts.map