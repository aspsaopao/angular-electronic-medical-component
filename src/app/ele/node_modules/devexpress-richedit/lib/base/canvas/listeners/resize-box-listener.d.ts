import { FieldsSettings } from '../../../core/model/options/fields';
import { StringResources } from '../../../core/string-resources';
import { Rectangle } from '@devexpress/utils/lib/geometry/rectangle';
import { IReadOnlyPropertyHolder } from '../../interfaces/i-rich-edit-core';
import { MouseEventSource } from '../../mouse-handler/mouse-event-source';
import { DocumentRendererPageCache } from '../renderes/common/document-renderer';
import { FrameBaseListener } from './frame-base-listener';
export declare class ResizeBoxListener extends FrameBaseListener {
    private isReadOnly;
    private readOnlyPropertyHolder;
    protected baseFrameClassName(): string;
    private static cornerLinesInfo;
    static directions: string[];
    static cursorNames: string[];
    static getCornerPrefix(): string;
    constructor(rendererCache: DocumentRendererPageCache[], stringResources: StringResources, readOnlyPropertyHolder: IReadOnlyPropertyHolder, fieldOptions: FieldsSettings);
    protected initElement(reinit: boolean): void;
    NotifyShow(pageIndex: number, bounds: Rectangle, tip: string, isTextBox: boolean, isAnchoredObject: boolean, rotation: number): void;
    setCursorsConsiderRotation(rotation: number): void;
    static directionToSource: Record<string, MouseEventSource>;
}
//# sourceMappingURL=resize-box-listener.d.ts.map