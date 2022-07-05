export interface IProgressIndicationService {
    begin(displayName: string, minProgress: number, maxProgress: number, currentProgress: number): any;
    end(): any;
    setProgress(currentProgress: number): any;
}
export declare enum ProgressIndicationState {
    Unknown = 0,
    Allowed = 1,
    Forbidden = 2
}
export declare class ProgressIndication implements IProgressIndicationService {
    private static readonly progressShowDelay;
    private static readonly minIndicationInterval;
    private readonly progressLimit;
    private readonly progressService;
    private indicationTime;
    private displayName;
    private minProgress;
    private progressRange;
    private normalizedProgress;
    private indicationState;
    constructor(progressService?: IProgressIndicationService);
    begin(displayName: string, minProgress: number, maxProgress: number, currentProgress: number): void;
    setProgress(currentProgress: number): void;
    end(): void;
    protected calculateProgress(value: number): number;
    protected beginIndicationCore(): void;
    protected indicateProgressCore(): void;
}
//# sourceMappingURL=progress-indication.d.ts.map