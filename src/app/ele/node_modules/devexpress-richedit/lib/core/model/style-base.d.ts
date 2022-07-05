import { ICloneable } from '@devexpress/utils/lib/types';
export declare abstract class StyleBase<TParent extends StyleBase<TParent>> implements ICloneable<StyleBase<TParent>> {
    styleName: string;
    localizedName: string;
    deleted: boolean;
    hidden: boolean;
    semihidden: boolean;
    isDefault: boolean;
    base64EncodedImage: string;
    primary: boolean;
    parent: TParent;
    id: string;
    constructor(styleName: string, localizedName: string, deleted: boolean, hidden: boolean, semihidden: boolean, isDefault: boolean, base64EncodedImage?: string, id?: string);
    abstract clone(): StyleBase<TParent>;
    equalsByName(obj: StyleBase<TParent>): boolean;
}
//# sourceMappingURL=style-base.d.ts.map