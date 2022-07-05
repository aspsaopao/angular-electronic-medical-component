import { ClientRichEdit } from '../../client-rich-edit';
import { IPaddings } from '../options';
export declare class Paddings implements IPaddings {
    left: number;
    right: number;
    top: number;
    bottom: number;
    constructor(top: number, right: number, bottom: number, left: number);
}
export declare class SimpleViewSettings {
    private _native;
    constructor(native: ClientRichEdit);
    get paddings(): IPaddings;
    get fixedWidth(): number | undefined;
    set paddings(paddings: IPaddings);
    set fixedWidth(width: number | undefined);
}
//# sourceMappingURL=simple-view.d.ts.map