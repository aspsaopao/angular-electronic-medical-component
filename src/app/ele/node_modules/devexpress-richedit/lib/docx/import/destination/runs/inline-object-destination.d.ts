import { AnchorObjectHorizontalPositionType, AnchorObjectVerticalPositionType } from '../../../../core/model/floating-objects/enums';
import { Size } from '@devexpress/utils/lib/geometry/size';
import { XmlReader } from '../../../zip/xml-reader';
import { InlinePictureCssParser } from '../../css-engine/inline-picture-css-parser';
import { Data } from '../../data';
import { FloatingObjectImportInfo } from '../../model/floating-object-import-info';
import { ElementDestination, ElementHandlerTable } from '../destination';
export declare class InlineObjectDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    floatingObjectImportInfo: FloatingObjectImportInfo;
    style: string;
    constructor(data: Data);
    static getThis(data: Data): InlineObjectDestination;
    processElementClose(_reader: XmlReader): void;
    getCssParser(size: Size): InlinePictureCssParser;
    importFloatingObject(cssParser: InlinePictureCssParser): void;
    protected convertToHorizontalPositionType(value: string): AnchorObjectHorizontalPositionType;
    protected convertToVerticalPositionType(value: string): AnchorObjectVerticalPositionType;
}
//# sourceMappingURL=inline-object-destination.d.ts.map