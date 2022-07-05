import { SectionStartType } from '../section/enums';
import { SectionColumnProperties } from '../section/section-column-properties';
import { BaseManipulator } from './base-manipulator';
import { ISectionPropertyManipulator } from './i-properties-manipulator';
import { ModelManipulator } from './model-manipulator';
import { PaperKind } from '../section/paper-kind';
export declare class SectionPropertiesManipulator extends BaseManipulator {
    landscape: ISectionPropertyManipulator<boolean>;
    marginLeft: ISectionPropertyManipulator<number>;
    marginTop: ISectionPropertyManipulator<number>;
    marginRight: ISectionPropertyManipulator<number>;
    marginBottom: ISectionPropertyManipulator<number>;
    columnCount: ISectionPropertyManipulator<number>;
    space: ISectionPropertyManipulator<number>;
    equalWidthColumns: ISectionPropertyManipulator<boolean>;
    columnsInfo: ISectionPropertyManipulator<SectionColumnProperties[]>;
    pageWidth: ISectionPropertyManipulator<number>;
    pageHeight: ISectionPropertyManipulator<number>;
    startType: ISectionPropertyManipulator<SectionStartType>;
    differentFirstPage: ISectionPropertyManipulator<boolean>;
    headerOffset: ISectionPropertyManipulator<number>;
    footerOffset: ISectionPropertyManipulator<number>;
    paperKind: ISectionPropertyManipulator<PaperKind>;
    constructor(manipulator: ModelManipulator);
}
//# sourceMappingURL=section-properties-manipulator.d.ts.map