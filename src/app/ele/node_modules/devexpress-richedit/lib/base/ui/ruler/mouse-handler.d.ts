import { IRulerEventsListener } from './events/mouse';
import { RulerControls } from './manager';
import { RulerModelData } from './model-data';
export interface IRulerMouseListener {
    onMouseDown(source: HTMLElement, evt: MouseEvent): boolean;
    onMouseMove(distance: number, source: HTMLElement): void;
    onMouseUp(): void;
    onEscPress(): void;
}
export declare class RulerMouseHandler implements IRulerEventsListener {
    private readonly controls;
    private readonly modelData;
    private readonly controlsList;
    private listener;
    private _enable;
    private _visible;
    constructor(modelData: RulerModelData, controls: RulerControls);
    setEnable(enable: boolean): void;
    setVisible(visible: boolean): void;
    canHandle(source: HTMLElement): boolean;
    private notHandle;
    onDoubleClick(evt: MouseEvent): void;
    onMouseDown(evt: MouseEvent): void;
    onMouseMove(distance: number, source: HTMLElement): void;
    onMouseUp(): void;
    onEscPress(): void;
    private reset;
}
//# sourceMappingURL=mouse-handler.d.ts.map