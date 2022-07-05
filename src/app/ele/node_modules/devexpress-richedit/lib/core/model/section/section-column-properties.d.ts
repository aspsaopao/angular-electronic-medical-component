import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
export declare class SectionColumnProperties implements ICloneable<SectionColumnProperties>, ISupportCopyFrom<SectionColumnProperties> {
    width: number;
    space: number;
    constructor(width: number, space: number);
    equals(obj: SectionColumnProperties): boolean;
    copyFrom(obj: SectionColumnProperties): void;
    clone(): SectionColumnProperties;
    applyConverter(converter: SimpleConverter<number>): SectionColumnProperties;
    static equalsColumnsInfoBinary(a: SectionColumnProperties[], b: SectionColumnProperties[]): boolean;
}
//# sourceMappingURL=section-column-properties.d.ts.map