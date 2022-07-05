import { DrawingEffectCollection } from './drawing-effect-collection';
import { DrawingEffectContainerType } from './enums';
export declare class ContainerEffect {
    name: string;
    type: DrawingEffectContainerType;
    hasEffectsList: boolean;
    effects: DrawingEffectCollection;
    constructor();
    get isEmpty(): boolean;
    clone(): ContainerEffect;
}
//# sourceMappingURL=container-effect.d.ts.map