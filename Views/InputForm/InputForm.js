class InputForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			degree: HOME_DEGREES.C.id,
			accidental: ACCIDENTALS.Natural.id,
			concept: CONCEPTS.Mode.id,
				interval: INTERVALS.PU.id,
				chord: CHORDS.Maj_Tri.id,
				scale: SCALES.Major.id,
				mode: MODES.Ionian.id,
				romanNumeral: ROMAN_NUMERALS.Major.id,
					romanNumeralChord: 0,
			label: LABELS.Name.id,
			filterOctave: false
		};
		this.props.onChange(this.state);
	}

	handleChange = (concept, value) => {
		console.log(concept + ': ' + value, this.state);
		let obj = {};
  		obj[concept] = value;
		this.setState(obj);
		this.props.onChange(obj);
	}

	getSelect = (conceptId, dataSource) => {
		let options = [];
		for(let i = 0; i < dataSource.length; i++)
		{
			options.push(e('option', {
					key: conceptId + '-opt-' + i,
					value: dataSource[i].id
				}, dataSource[i].name)
			);
		}
		return e('select', {
			id: 'input-' + conceptId,
			value: this.state[conceptId],
			onChange: (event) => { this.handleChange(conceptId, event.target.value); }
		}, options);
	}

	getKeyInputs = () => {
		return [
			this.getSelect(CONCEPTS.Degree.id, ALL_HOME_DEGREES),
			this.getSelect(CONCEPTS.Accidental.id, ALL_ACCIDENTALS)
		];
	}

	getConceptInputs = () => {
		let inputs = [
			this.getSelect('concept', ALL_CONCEPTS.filter((concept) => { return concept.active; }))
		];
		switch(this.state.concept) {
			case CONCEPTS.Interval.id: {
				inputs.push(this.getSelect(CONCEPTS.Interval.id, ALL_INTERVALS));
				break;
			}
			case CONCEPTS.Chord.id: {
				inputs.push(this.getSelect(CONCEPTS.Chord.id, ALL_CHORDS));
				break;
			}
			case CONCEPTS.Scale.id: {
				inputs.push(this.getSelect(CONCEPTS.Scale.id, ALL_SCALES));
				break;
			}
			case CONCEPTS.Mode.id: {
				inputs.push(this.getSelect(CONCEPTS.Mode.id, ALL_MODES));
				break;
			}
			case CONCEPTS.RomanNumeral.id: {
				inputs.push(this.getSelect(CONCEPTS.RomanNumeral.id, ALL_ROMAN_NUMERALS));
				break;
			}
		}
		return inputs;
	}

	getDisplayInputs = () => {
		let inputs = [
			this.getSelect(CONCEPTS.Label.id, ALL_LABELS),
			e('br'),
			e('input', {
				id: 'filterOctave',
				type: 'checkbox',
				onChange: (event) => { this.handleChange('filterOctave', event.checked); }
			}, null),
			'Filter Octave'
		];
		return inputs;
	}

	render = () => {
		return e('div', {id: 'inputContainer'},
			this.getKeyInputs(), e('br'),
			this.getConceptInputs(), e('br'),
			this.getDisplayInputs(), e('br'),
		);
	};
}