import { EventDispatcher } from '../../base-utils/event-dispatcher';
import { IScrollChangesListener } from '../selection/i-selection-changes-listener';
import { IModelState } from './model-states';
export declare class ModelScrollManager {
    state: IModelState;
    onChanged: EventDispatcher<IScrollChangesListener>;
    constructor();
    setScroll(state: IModelState): void;
    init(): void;
    raiseOnChanged(): void;
    static StandartScrollPosition: number;
    static DontChangeScrollPosition: number;
}
//# sourceMappingURL=model-scroll-manager.d.ts.map