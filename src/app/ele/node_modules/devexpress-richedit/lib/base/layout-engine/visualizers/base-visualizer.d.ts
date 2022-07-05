import { EventDispatcher } from '../../../base-utils/event-dispatcher';
import { Rectangle } from '@devexpress/utils/lib/geometry/rectangle';
import { IFrameBaseListener } from '../../canvas/listeners/frame-base-listener';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
export declare class BaseVisualizer {
    onChanged: EventDispatcher<IFrameBaseListener>;
    protected control: IRichEditControl;
    protected pageIndex: number;
    protected bounds: Rectangle;
    protected tip: string;
    protected isTextBox: boolean;
    protected isAnchoredObject: boolean;
    protected rotation: number;
    constructor(control: IRichEditControl);
    closeDocument(): void;
    protected reset(): void;
    hide(): void;
    protected raiseShow(): void;
    protected raiseHide(): void;
}
//# sourceMappingURL=base-visualizer.d.ts.map