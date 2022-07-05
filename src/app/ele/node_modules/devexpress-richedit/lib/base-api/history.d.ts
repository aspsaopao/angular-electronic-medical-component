import { RichEditCore } from '../base/rich-edit-core';
export declare class HistoryApi {
    private _core;
    constructor(core: RichEditCore);
    beginTransaction(): void;
    endTransaction(): void;
    redo(): void;
    undo(): void;
    clear(): void;
}
//# sourceMappingURL=history.d.ts.map