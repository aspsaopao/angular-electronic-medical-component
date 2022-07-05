import { FontInfo } from '../../core/model/fonts/font-info';
import { IProcessor } from '../../core/processor';
export declare class ModelFontApi {
    private _internalItem;
    private _processor;
    constructor(processor: IProcessor, internalItem: FontInfo);
    get name(): string;
    get cssName(): string;
    delete(): void;
}
//# sourceMappingURL=model-font.d.ts.map