import { BaseManipulator } from '../base-manipulator';
import { ModelManipulator } from '../model-manipulator';
import { AnchorInfoManipulator } from './anchor-info-manipulator';
import { ImageManipulator } from './image-manipulator';
import { ShapeManipulator } from './shape-manipulator';
import { AnchorPictureSizeManipulator, AnchorTextBoxSizeManipulator } from './size-manipulator';
import { TextBoxPropertiesManipulator } from './text-box-properties-manipulator';
import { ZOrderManipulator } from './z-order-manipulator';
export declare class FloatingObjectsManipulator extends BaseManipulator {
    anchorInfo: AnchorInfoManipulator;
    shape: ShapeManipulator;
    textBoxSize: AnchorTextBoxSizeManipulator;
    pictureSize: AnchorPictureSizeManipulator;
    textBoxProperties: TextBoxPropertiesManipulator;
    zOrder: ZOrderManipulator;
    image: ImageManipulator;
    constructor(manipulator: ModelManipulator);
}
//# sourceMappingURL=floating-objects-manipulator.d.ts.map