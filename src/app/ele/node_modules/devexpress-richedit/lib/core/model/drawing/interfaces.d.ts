import { DocumentModel } from '../document-model';
import { DrawingBulletType, DrawingFillType, DrawingUnderlineFillType } from './enums';
export interface IDrawingEffect {
    clone(): IDrawingEffect;
}
export interface IUnderlineFill {
    type: DrawingUnderlineFillType;
    cloneTo(documentModel: DocumentModel): IUnderlineFill;
}
export interface IDrawingBullet {
    type: DrawingBulletType;
    clone(): IDrawingBullet;
}
export interface IDrawingFill {
    fillType: DrawingFillType;
    clone(): IDrawingFill;
    equals(obj: IDrawingFill): boolean;
}
//# sourceMappingURL=interfaces.d.ts.map