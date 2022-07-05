import { ColorTransformBase } from './color-transform-base';
export declare class ColorTransformCollection {
    transforms: ColorTransformBase[];
    constructor(transforms?: ColorTransformBase[]);
    applyTransform(color: number): number;
    add(transf: ColorTransformBase): void;
    equals(obj: ColorTransformCollection): boolean;
    clear(): void;
    clone(): ColorTransformCollection;
}
//# sourceMappingURL=color-transform-collection.d.ts.map