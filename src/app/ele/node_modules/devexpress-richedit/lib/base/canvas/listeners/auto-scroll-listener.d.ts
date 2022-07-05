import { Rectangle } from '@devexpress/utils/lib/geometry/rectangle';
import { IFrameBaseListener } from './frame-base-listener';
export declare class AutoScrollListener implements IFrameBaseListener {
    static HALF_SIZE: number;
    protected baseFrame: HTMLElement;
    protected serviceContainer: HTMLElement;
    protected top: HTMLElement;
    protected center: HTMLElement;
    protected bottom: HTMLElement;
    constructor(serviceContainer: HTMLElement);
    NotifyHide(): void;
    NotifyShow(_pageIndex: number, bounds: Rectangle, _tip: string, _isTextBox: boolean, _isAnchoredObject: boolean, _rotation: number): void;
}
//# sourceMappingURL=auto-scroll-listener.d.ts.map