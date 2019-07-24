import * as React from "react";
import "./GuitarView.css";
import "../../../../TheoryCore/TheoryStyles.css";
import { TheoryEngine, Note } from "../../../../TheoryCore/TheoryEngine";
import { GuitarConfig } from "./Guitar";

type GuitarFretProps = {
    fretNumber: number;
    stringNumber: number;
    note: Note;
    config: GuitarConfig;
}

export class GuitarFret extends React.Component<GuitarFretProps> {

    constructor(props) {
        super(props);
    }

    getLabel = (): string | number => {
        let note = this.props.note;
        switch (this.props.config.guitarNoteLabel) {
            case 'none':
                return '';
            case 'name':
                return note.name;
            case 'interval':
                return note.interval.id;
            case 'relativePosition':
                return note.relativePosition;
            case 'absolutePosition':
                return note.absolutePosition;
            case 'degree':
                return note.interval.degree;
            case 'absoluteDegree':
                return note.absoluteDegree;
            case 'octave':
                return note.octave;
            case 'frequency':
                return note.frequency;
            case 'fretNumber':
                return this.props.fretNumber;
            default:
                return '';
        }
    }

    render = () => {
        let colorClass = (this.props.note.interval.id !== '') ? `degree-${this.props.note.interval.degree}` : '';
        let classes = ['guitar-fret', 'wood'];
        let labelClasses = [colorClass, 'guitar-fret-label']
        if (this.props.fretNumber === 0)
            classes.push('guitar-fret-open');

        return <div
            className={classes.join(' ')}
            onClick={() => { TheoryEngine.playNotes([this.props.note]); }}
        >
            <div className={labelClasses.join(' ')}>{this.getLabel()}</div>
        </div>;
    };
}