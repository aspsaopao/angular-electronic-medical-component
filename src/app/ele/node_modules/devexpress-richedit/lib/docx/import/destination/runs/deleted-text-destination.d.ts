import { MaskedCharacterProperties } from '../../../../core/model/character/character-properties';
import { XmlReader } from '../../../zip/xml-reader';
import { Data } from '../../data';
import { TextDestination } from './text-destination';
export declare class DeletedTextDestination extends TextDestination {
    characterProperties: MaskedCharacterProperties;
    constructor(data: Data);
    processElementOpen(_reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=deleted-text-destination.d.ts.map