import { Preset } from "../../Theory/TheoryConfig";

export interface GuitarConfig {
    noteLabel: any;
    showDots: boolean;
    filterOctave: boolean;
    strings: GuitarStringConfig[];
    fretLow: number;
    fretHigh: number;
}

export interface GuitarStringConfig {
    openPosition: number
    voicing?: any;
}

export const PRESETS_GUITAR_CONFIG: Preset<GuitarConfig>[] = [
    {
        id: 'guitar',
        name: 'Guitar',
        config: {
            noteLabel: { id: 'interval' } as any,
            showDots: true,
            filterOctave: true,
            fretLow: 0,
            fretHigh: 12,
            strings: [
                { openPosition: 16 },   // e
                { openPosition: 11 },   // B
                { openPosition: 7 },    // G
                { openPosition: 2 },    // D
                { openPosition: -3 },   // A
                { openPosition: -8 }    // E   
            ]
        }
    },
    {
        id: 'bass',
        name: 'Bass',
        config: {
            noteLabel: { id: 'name' } as any,
            showDots: true,
            filterOctave: false,
            fretLow: 0,
            fretHigh: 12,
            strings: [
                { openPosition: 7 },    // G
                { openPosition: 2 },    // D
                { openPosition: -3 },   // A
                { openPosition: -8 }    // E   
            ]
        }
    }
]