import { DrawingStrokeUnderlineType } from './enums';
import { IDrawingFill } from './interfaces';
export declare class Outline {
    private _fill;
    constructor(fill?: IDrawingFill);
    get fill(): IDrawingFill;
    set fill(value: IDrawingFill);
    get type(): DrawingStrokeUnderlineType;
    clone(): Outline;
}
//# sourceMappingURL=outline.d.ts.map