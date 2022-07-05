import { LightRigDirection, LightRigPreset, PresetCameraType } from './enums';
export declare class Scene3DPropertiesInfo {
    private static defaultInfo;
    static maskPresetCameraType: number;
    static maskLightRigDirection: number;
    static maskLightRigPreset: number;
    static maskHasCameraRotation: number;
    static maskHasLightRigRotation: number;
    packedValues: number;
    fov: number;
    zoom: number;
    private hash;
    get cameraType(): PresetCameraType;
    set cameraType(value: PresetCameraType);
    get lightRigDirection(): LightRigDirection;
    set lightRigDirection(value: LightRigDirection);
    get lightRigPreset(): LightRigPreset;
    set lightRigPreset(value: LightRigPreset);
    get hasCameraRotation(): boolean;
    set hasCameraRotation(value: boolean);
    get hasLightRigRotation(): boolean;
    set hasLightRigRotation(value: boolean);
    get isDefault(): boolean;
    protected calculateHash(): number;
    getHashCode(): number;
    private getUIntValue;
    private setUIntValue;
    private setBooleanValue;
    private getBooleanValue;
    equals(obj: Scene3DPropertiesInfo): boolean;
    clone(): Scene3DPropertiesInfo;
}
//# sourceMappingURL=scene3d-properties-info.d.ts.map