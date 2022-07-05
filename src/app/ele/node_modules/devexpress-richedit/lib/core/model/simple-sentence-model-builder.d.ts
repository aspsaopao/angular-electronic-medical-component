export declare class SimpleSentenceWord {
    position: number;
    text: string;
    constructor(position: number, text: string);
}
export declare class SimpleSentence {
    words: SimpleSentenceWord[];
}
export declare class SimpleSentenceStructureBuilder {
    readonly sentences: SimpleSentence[];
    private readonly text;
    private charIndex;
    private currChar;
    private prevChar;
    private currSentence;
    private currWord;
    constructor(text: string);
    build(): SimpleSentence[];
    private finishSentence;
    private finishWord;
    private addSentence;
    private addWord;
    private addNewWordPart;
    private postprocessing;
}
//# sourceMappingURL=simple-sentence-model-builder.d.ts.map