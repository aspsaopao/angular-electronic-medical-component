import { IEventListener } from '../../../base-utils/event-dispatcher';
import { FieldsSettings } from '../../../core/model/options/fields';
import { StringResources } from '../../../core/string-resources';
import { Rectangle } from '@devexpress/utils/lib/geometry/rectangle';
import { DocumentRendererPageCache } from '../renderes/common/document-renderer';
export interface IFrameBaseListener extends IEventListener {
    NotifyHide(): any;
    NotifyShow(pageIndex: number, bounds: Rectangle, tip: string, isTextBox: boolean, isAnchoredObject: boolean, rotation: number): any;
}
export declare abstract class FrameBaseListener implements IFrameBaseListener {
    protected baseFrame: HTMLElement;
    protected rendererCache: DocumentRendererPageCache[];
    private stringResources;
    private fieldOptions;
    constructor(rendererCache: DocumentRendererPageCache[], stringResources: StringResources, fieldOptions: FieldsSettings);
    protected initFrameElement(): void;
    protected abstract baseFrameClassName(): string;
    NotifyHide(): void;
    NotifyShow(pageIndex: number, bounds: Rectangle, tip: string, isTextBox: boolean, isAnchoredObject: boolean, rotation: number): void;
    private toggleClass;
    static CLASSNAMES: {
        CONTAINER: string;
        CORNER_ELEM_PREFIX: string;
        CORNER_LINE_PREFIX: string;
        CORNER_TOUCH_POSTFIX: string;
        ROTATION_BOX: string;
        ROTATION_LINE: string;
        ANCHORED_OBJECT: string;
        TEXTBOX_AREA: string;
        IS_BOX_ROTATED: string;
    };
}
//# sourceMappingURL=frame-base-listener.d.ts.map