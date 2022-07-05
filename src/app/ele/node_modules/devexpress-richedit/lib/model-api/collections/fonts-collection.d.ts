import { FontInfo } from '../../core/model/fonts/font-info';
import { ModelFontApi } from '../fonts/model-font';
import { Collection } from './collection';
export declare class FontCollection extends Collection<ModelFontApi, FontInfo> {
    protected _getItem(internalItem: FontInfo): ModelFontApi;
    protected _getCoreItems(): FontInfo[];
    getByName(name: string): ModelFontApi | null;
    create(name: string, cssName?: string): ModelFontApi | null;
    getAllFontNames(): string[];
}
//# sourceMappingURL=fonts-collection.d.ts.map