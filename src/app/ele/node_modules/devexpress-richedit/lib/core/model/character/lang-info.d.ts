import { ICloneable, IEquatable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
export declare class LangInfo implements ISupportCopyFrom<LangInfo>, IEquatable<LangInfo>, ICloneable<LangInfo> {
    bidi: string;
    eastAsia: string;
    latin: string;
    constructor(bidi?: string, eastAsia?: string, latin?: string);
    copyFrom(obj: LangInfo): void;
    equals(obj: LangInfo): boolean;
    static equalsBinary(langInfoA: LangInfo, langInfoB: LangInfo): boolean;
    clone(): LangInfo;
    isEmpty(): boolean;
}
//# sourceMappingURL=lang-info.d.ts.map