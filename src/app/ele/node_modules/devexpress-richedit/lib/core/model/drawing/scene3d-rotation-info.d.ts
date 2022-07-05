export declare class Scene3DRotationInfo {
    static defaultInfo: Scene3DRotationInfo;
    latitude: number;
    longitude: number;
    revolution: number;
    private hash;
    constructor(latitude?: number, longitude?: number, revolution?: number);
    protected calculateHash(): number;
    getHashCode(): number;
    equals(obj: Scene3DRotationInfo): boolean;
    clone(): Scene3DRotationInfo;
}
//# sourceMappingURL=scene3d-rotation-info.d.ts.map