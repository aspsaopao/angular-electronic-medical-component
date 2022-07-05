import { ThemeFontSchemePart } from '../../../../../core/model/themes/theme-font-scheme-part';
import { XmlReader } from '../../../../zip/xml-reader';
import { Data } from '../../../data';
import { LeafElementDestination } from '../../destination';
export declare class OfficeThemeSupplementalFontSchemeDestination extends LeafElementDestination {
    fontPart: ThemeFontSchemePart;
    constructor(data: Data, fontPart: ThemeFontSchemePart);
    processElementClose(reader: XmlReader): void;
}
//# sourceMappingURL=office-theme-supplemental-font-scheme-destination.d.ts.map