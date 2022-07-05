import { IFontsChangesListener } from '../../core/interfaces/i-font-changes-listener';
import { FontInfoCache } from '../../core/model/caches/hashed-caches/font-info-cache';
import { FontInfo } from '../../core/model/fonts/font-info';
import { ClientRichEdit } from '../client-rich-edit';
export declare class ClientFontChangesListener implements IFontsChangesListener {
    controlOwner: ClientRichEdit;
    constructor(controlOwner: ClientRichEdit);
    NotifyFontAdded(font: FontInfo): void;
    NotifyFontRemoved(font: FontInfo): void;
    NotifyFontListChanged(fontCache: FontInfoCache): void;
    private changeRibbonFontList;
}
//# sourceMappingURL=font-changes-listener.d.ts.map