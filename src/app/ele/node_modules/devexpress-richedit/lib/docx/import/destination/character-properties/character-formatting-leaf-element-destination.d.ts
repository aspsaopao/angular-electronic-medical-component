import { MaskedCharacterProperties } from '../../../../core/model/character/character-properties';
import { ICharacterPropertyDescriptor } from '../../../../core/model/character/character-property-descriptor';
import { Data } from '../../data';
import { LeafElementDestination } from '../destination';
export declare abstract class CharacterFormattingLeafElementDestination<T> extends LeafElementDestination {
    protected readonly characterProperties: MaskedCharacterProperties;
    constructor(data: Data, characterProperties: MaskedCharacterProperties);
    setProperty(newValue: T): void;
    protected abstract getDescriptor(): ICharacterPropertyDescriptor<T>;
}
//# sourceMappingURL=character-formatting-leaf-element-destination.d.ts.map