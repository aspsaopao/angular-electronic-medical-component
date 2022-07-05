import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare abstract class SetParagraphLevelCommandBase extends CommandBase<SimpleCommandState> {
    isEnabled(): boolean;
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<number>): boolean;
    protected abstract getLevel(parameter: number): number;
    protected getRelatedCommands(): Record<number, boolean>;
}
export declare class SetParagraphLevelCommand extends SetParagraphLevelCommandBase {
    getState(): SimpleCommandState;
    protected getLevel(parameter: number): number;
}
export declare class SetParagraphBodyTextLevelCommand extends SetParagraphLevelCommandBase {
    protected getLevel(_parameter: number): number;
}
export declare class SetParagraphHeading1LevelCommand extends SetParagraphLevelCommandBase {
    protected getLevel(_parameter: number): number;
}
export declare class SetParagraphHeading2LevelCommand extends SetParagraphLevelCommandBase {
    protected getLevel(_parameter: number): number;
}
export declare class SetParagraphHeading3LevelCommand extends SetParagraphLevelCommandBase {
    protected getLevel(_parameter: number): number;
}
export declare class SetParagraphHeading4LevelCommand extends SetParagraphLevelCommandBase {
    protected getLevel(_parameter: number): number;
}
export declare class SetParagraphHeading5LevelCommand extends SetParagraphLevelCommandBase {
    protected getLevel(_parameter: number): number;
}
export declare class SetParagraphHeading6LevelCommand extends SetParagraphLevelCommandBase {
    protected getLevel(_parameter: number): number;
}
export declare class SetParagraphHeading7LevelCommand extends SetParagraphLevelCommandBase {
    protected getLevel(_parameter: number): number;
}
export declare class SetParagraphHeading8LevelCommand extends SetParagraphLevelCommandBase {
    protected getLevel(_parameter: number): number;
}
export declare class SetParagraphHeading9LevelCommand extends SetParagraphLevelCommandBase {
    protected getLevel(_parameter: number): number;
}
//# sourceMappingURL=set-paragraph-level-command.d.ts.map