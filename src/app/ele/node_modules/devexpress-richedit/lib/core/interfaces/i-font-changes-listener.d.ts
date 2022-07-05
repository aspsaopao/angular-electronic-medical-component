import { IEventListener } from '../../base-utils/event-dispatcher';
import { FontInfoCache } from '../model/caches/hashed-caches/font-info-cache';
import { FontInfo } from '../model/fonts/font-info';
export interface IFontsChangesListener extends IEventListener {
    NotifyFontAdded(font: FontInfo): void;
    NotifyFontRemoved(font: FontInfo): void;
    NotifyFontListChanged(fontCache: FontInfoCache): void;
}
//# sourceMappingURL=i-font-changes-listener.d.ts.map