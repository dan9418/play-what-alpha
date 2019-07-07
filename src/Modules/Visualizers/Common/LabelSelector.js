class LabelSelector extends React.Component {

    constructor(props) {
        super(props);
        this.config = LABEL_CONFIG.Labels;
    }

    getOptions = () => {
        let options = [];
        for (let i = 0; i < this.config.data.length; i++) {
            let datum = this.config.data[i];
            options.push(<option id={datum.id} key={datum.id} value={datum.id} className={'select-option'}>{datum.name}</option>);
        }
        return options;
    }

    render = () => {
        return <div id={this.config.id + '-selection'} className='dropdown-container'>
            <select
                defaultValue={null}
                onChange={(event) => { this.props.updateViewDriverState(this.config.id, event.target.value) }}>
                {this.getOptions()}
            </select>
        </div>
    };
}