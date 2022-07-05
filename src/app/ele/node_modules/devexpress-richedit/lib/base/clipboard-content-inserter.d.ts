import { IRichEditControl } from './interfaces/i-rich-edit-core';
export declare class ClipboardContentInserter {
    private control;
    private processed;
    private loadingPanelManager;
    constructor(control: IRichEditControl);
    insert(evt: ClipboardEvent): boolean;
    private insertClipboardHtml;
    private insertClipboardPicture;
    private insertClipboardRtf;
}
//# sourceMappingURL=clipboard-content-inserter.d.ts.map