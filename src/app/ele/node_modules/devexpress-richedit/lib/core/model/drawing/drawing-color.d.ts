import { ColorHSL } from '../color/color-hsl';
import { ColorProvider } from '../color/color-provider';
import { DrawingColorType } from '../color/enums';
import { ScRGBColor } from '../color/sc-rgbcolor';
import { SchemeColorValues, SystemColorValues } from '../themes/enums';
import { DrawingColorModelInfo } from './drawing-color-model-info';
import { DrawingBulletType } from './enums';
import { ColorTransformCollection } from './transform/color-transform-collection';
export interface IDrawingOriginalColor {
    rgb: number;
    system: SystemColorValues;
    scheme: SchemeColorValues;
    preset: string;
    hsl: ColorHSL;
    scRgb: ScRGBColor;
    transforms: ColorTransformCollection;
    setColorFromRGB(rgb: number): any;
}
export declare class DrawingColor {
    readonly transforms: ColorTransformCollection;
    color: DrawingColorModelInfo;
    constructor(color: DrawingColorModelInfo, transforms?: ColorTransformCollection);
    static createByDrawingColorModel(colorInfo: DrawingColorModelInfo): DrawingColor;
    static createByColor(color: number): DrawingColor;
    get isEmpty(): boolean;
    finalColor(colorProvider: ColorProvider): number;
    get originalColor(): IDrawingOriginalColor;
    setColorFromRGB(rgb: number): void;
    get rgb(): number;
    set rgb(value: number);
    get system(): SystemColorValues;
    set system(value: SystemColorValues);
    get scheme(): SchemeColorValues;
    set scheme(value: SchemeColorValues);
    get preset(): string;
    set preset(value: string);
    get hsl(): ColorHSL;
    set hsl(value: ColorHSL);
    get scRgb(): ScRGBColor;
    set scRgb(value: ScRGBColor);
    get colorType(): DrawingColorType;
    toRgb(colorProvider: ColorProvider, styleColor: number): number;
    get type(): DrawingBulletType;
    equals(obj: DrawingColor): boolean;
    clear(): void;
    clone(): DrawingColor;
}
//# sourceMappingURL=drawing-color.d.ts.map