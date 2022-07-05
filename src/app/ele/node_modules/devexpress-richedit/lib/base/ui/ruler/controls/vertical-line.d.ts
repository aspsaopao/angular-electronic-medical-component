import { RulerSettings } from '../settings';
export declare const TABLE_COLUMN_SEPARATOR_RULER_LINE_CLASS_NAME: string;
export declare enum SnapTo {
    LeftSide = 0,
    RightSide = 1
}
export declare enum RulerLineDisplayType {
    Normal = 0,
    TableColumn = 1
}
export declare class RulerVerticalLineControl {
    private canvas;
    rootElement: HTMLElement;
    private borderWidth;
    private rulerControlLeft;
    private rulerControlWidth;
    private viewElementLeft;
    private rulerControlElement;
    constructor(canvas: HTMLDivElement, settings: RulerSettings, rulerControlElement: HTMLElement);
    dispose(): void;
    show(type: RulerLineDisplayType): void;
    hide(): void;
    setPosition(value: number, snapTo: SnapTo): void;
}
//# sourceMappingURL=vertical-line.d.ts.map