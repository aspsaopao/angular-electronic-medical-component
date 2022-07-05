import { IFormattersOptions } from '@devexpress/utils/lib/formatters/options';
export declare class ClientFormattersOptions implements IFormattersOptions {
    private get locDate();
    private get locNumber();
    get twoDigitYearMax(): number;
    get ts(): string;
    get ds(): string;
    get am(): string;
    get pm(): string;
    get monthNames(): string[];
    get genMonthNames(): string[];
    get abbrMonthNames(): string[];
    get abbrDayNames(): string[];
    get dayNames(): string[];
    get shortTime(): string;
    get longTime(): string;
    get shortDate(): string;
    get longDate(): string;
    get monthDay(): string;
    get yearMonth(): string;
    get numDecimalPoint(): string;
    get numPrec(): number;
    get numGroupSeparator(): string;
    get numGroups(): number[];
    get numNegPattern(): number;
    get numPosInf(): string;
    get numNegInf(): string;
    get numNan(): string;
    get currency(): string;
    get currDecimalPoint(): string;
    get currPrec(): number;
    get currGroupSeparator(): string;
    get currGroups(): number[];
    get currPosPattern(): number;
    get currNegPattern(): number;
    get percentPattern(): number;
    clone(): ClientFormattersOptions;
}
//# sourceMappingURL=formatters-options.d.ts.map