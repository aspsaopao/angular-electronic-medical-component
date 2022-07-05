import { DrawingEffectStyle } from '../drawing/drawing-effect-style';
import { IDrawingFill } from '../drawing/interfaces';
import { Outline } from '../drawing/outline';
import { StyleMatrixElementType } from './enums';
export declare class ThemeFormatScheme {
    backgroundFillStyleList: IDrawingFill[];
    fillStyleList: IDrawingFill[];
    lineStyleList: Outline[];
    effectStyleList: DrawingEffectStyle[];
    name: string;
    get isValidate(): boolean;
    getOutlineByType(type: StyleMatrixElementType): Outline;
    getOutlineByIndex(index: number): Outline;
    getFillByType(type: StyleMatrixElementType): IDrawingFill;
    getFillByIndex(index: number): IDrawingFill;
    getEffectStyle(type: StyleMatrixElementType): DrawingEffectStyle;
    getElementByType<T>(type: StyleMatrixElementType, items: T[]): T;
    getElementByIndex<T>(index: number, items: T[]): T;
    checkValidation(): boolean;
    copyFrom(obj: ThemeFormatScheme): void;
    clear(): void;
}
//# sourceMappingURL=theme-format-scheme.d.ts.map