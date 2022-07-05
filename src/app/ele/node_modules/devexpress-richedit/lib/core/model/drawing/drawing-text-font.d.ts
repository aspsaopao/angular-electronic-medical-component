import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { DrawingBulletType } from './enums';
import { IDrawingBullet } from './interfaces';
export declare class DrawingTextFont implements ICloneable<DrawingTextFont>, ISupportCopyFrom<DrawingTextFont>, IDrawingBullet {
    static DefaultCharset: number;
    static DefaultPitchFamily: number;
    static typefaceIndex: number;
    static panoseIndex: number;
    static charsetIndex: number;
    static pitchFamilyIndex: number;
    private stringArray;
    private byteArray;
    constructor();
    get typeface(): string;
    set typeface(value: string);
    get panose(): string;
    set panose(value: string);
    get charset(): number;
    set charset(value: number);
    get pitchFamily(): number;
    set pitchFamily(value: number);
    get isDefault(): boolean;
    copyFrom(value: DrawingTextFont): void;
    clone(): DrawingTextFont;
    equals(other: DrawingTextFont): boolean;
    clear(): void;
    get type(): DrawingBulletType;
    private setStringArray;
    private setByteArray;
}
//# sourceMappingURL=drawing-text-font.d.ts.map