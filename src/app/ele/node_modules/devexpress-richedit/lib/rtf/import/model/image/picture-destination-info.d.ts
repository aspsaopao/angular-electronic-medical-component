import { PictureSourceType } from '../../destination/utils/enums';
import { Win32MapMode } from '../enums';
import { RtfShapePropertiesInfo } from '../shape/shape-properties-info';
export declare class PictureDestinationInfo {
    pictureSourceType: PictureSourceType;
    wmfMapMode: Win32MapMode;
    bmpBitsPerPixel: number;
    bmpColorPlanes: number;
    bmpBytesInLine: number;
    pictureWidth: number;
    pictureHeight: number;
    desiredPictureWidth: number;
    desiredPictureHeight: number;
    scaleX: number;
    scaleY: number;
    dataStream: string[];
    imageUri: string;
    leftCrop: number;
    topCrop: number;
    rightCrop: number;
    bottomCrop: number;
    blipTag: number;
    properties: RtfShapePropertiesInfo;
    constructor();
    get dataCrc32(): number;
}
//# sourceMappingURL=picture-destination-info.d.ts.map