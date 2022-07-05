/// <reference types="node" />
export declare type IPdfKitColorValue = string | [number, number, number] | [number, number, number, number];
export interface IPdfKitDocument {
    pipe(stream: any): void;
    registerFont(font: string, source: ArrayBuffer, fontFamily: string): IPdfKitDocument;
    end(): void;
    addPage(options?: IPdfKitPageOptions): IPdfKitDocument;
    save(): IPdfKitDocument;
    restore(): IPdfKitDocument;
    rect(x: number, y: number, width: number, height: number): IPdfKitDocument;
    stroke(color?: IPdfKitColorValue): IPdfKitDocument;
    fillColor(color: IPdfKitColorValue, opacity?: number): IPdfKitDocument;
    rotate(angle: number, options?: {
        origin?: number[];
    }): IPdfKitDocument;
    image(src: any, x?: number, y?: number, options?: IPdfKitImageOption): IPdfKitDocument;
    image(src: any, options?: IPdfKitImageOption): IPdfKitDocument;
    strokeColor(color: IPdfKitColorValue, opacity?: number): IPdfKitDocument;
    strokeOpacity(opacity: number): any;
    lineWidth(w: number): IPdfKitDocument;
    polygon(...points: number[][]): IPdfKitDocument;
    transform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): IPdfKitDocument;
    text(text: string, x?: number, y?: number, options?: IPdfKitTextOptions): IPdfKitDocument;
    text(text: string, options?: IPdfKitTextOptions): IPdfKitDocument;
    font(buffer: Buffer): IPdfKitDocument;
    font(src: string, family?: string, size?: number): IPdfKitDocument;
    link(x: number, y: number, w: number, h: number, url: string, option?: IPdfKitAnnotationOption): IPdfKitDocument;
    strike(x: number, y: number, w: number, h: number, option?: IPdfKitAnnotationOption): IPdfKitDocument;
    clip(): IPdfKitDocument;
    fill(color?: IPdfKitColorValue, rule?: IPdfKitRuleValue): IPdfKitDocument;
    fillOpacity(opacity: number): IPdfKitDocument;
    fill(rule: IPdfKitRuleValue): IPdfKitDocument;
}
export declare type IPdfKitRuleValue = 'even-odd' | 'evenodd' | 'non-zero' | 'nonzero';
export interface IPdfKitPageOptions {
    size?: [number, number] | string;
    margin?: number;
    margins?: {
        top: number;
        left: number;
        bottom: number;
        right: number;
    };
    compress?: boolean;
    info?: IPdfKitDocumentInfo;
    autoFirstPage?: boolean;
    layout?: 'portrait' | 'landscape';
    bufferPages?: boolean;
}
export interface IPdfKitDocumentInfo {
    Producer?: string;
    Creator?: string;
    CreationDate?: Date;
    Title?: string;
    Author?: string;
    Keywords?: string;
    ModDate?: Date;
}
interface IPdfKitImageOption {
    width?: number;
    height?: number;
    scale?: number;
    fit?: [number, number];
    cover?: [number, number];
    align?: 'center' | 'right';
    valign?: 'center' | 'bottom';
    link?: IPdfKitAnnotationOption;
    goTo?: IPdfKitAnnotationOption;
    destination?: string;
}
interface IPdfKitAnnotationOption {
    Type?: string;
    Rect?: any;
    Border?: Array<number>;
    SubType?: string;
    Contents?: string;
    Name?: string;
    color?: string;
    QuadPoints?: Array<number>;
    A?: any;
    B?: any;
    C?: any;
    L?: any;
    DA?: string;
}
export interface IPdfKitTextOptions {
    lineBreak?: boolean;
    width?: number;
    height?: number;
    ellipsis?: boolean | string;
    columns?: number;
    columnGap?: number;
    indent?: number;
    paragraphGap?: number;
    lineGap?: number;
    wordSpacing?: number;
    characterSpacing?: number;
    fill?: boolean;
    stroke?: boolean;
    link?: string;
    underline?: boolean;
    strike?: boolean;
    continued?: boolean;
    oblique?: boolean | number;
    align?: 'center' | 'justify' | 'left' | 'right' | string;
    baseline?: number | 'svg-middle' | 'middle' | 'svg-central' | 'bottom' | 'ideographic' | 'alphabetic' | 'mathematical' | 'hanging' | 'top';
}
export {};
//# sourceMappingURL=interfaces.d.ts.map