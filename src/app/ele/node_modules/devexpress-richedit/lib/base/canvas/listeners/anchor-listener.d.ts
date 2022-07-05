import { FieldsSettings } from '../../../core/model/options/fields';
import { StringResources } from '../../../core/string-resources';
import { Rectangle } from '@devexpress/utils/lib/geometry/rectangle';
import { IReadOnlyPropertyHolder } from '../../interfaces/i-rich-edit-core';
import { DocumentRendererPageCache } from '../renderes/common/document-renderer';
import { FrameBaseListener } from './frame-base-listener';
export declare class AnchorListener extends FrameBaseListener {
    private readOnlyPropertyHolder;
    protected baseFrameClassName(): string;
    constructor(rendererCache: DocumentRendererPageCache[], stringResources: StringResources, readOnlyPropertyHolder: IReadOnlyPropertyHolder, fieldOptions: FieldsSettings);
    NotifyShow(pageIndex: number, bounds: Rectangle, tip: string, isTextBox: boolean, isAnchoredObject: boolean, rotation: number): void;
}
//# sourceMappingURL=anchor-listener.d.ts.map