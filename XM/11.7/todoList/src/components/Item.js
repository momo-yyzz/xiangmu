import React,{Component} from 'react';

export default class extends Component{

    constructor(props){
        super(props);
        this.deleteToto = this.deleteToto.bind(this)
    }

    deleteToto(){
        let {id, deleteToto} = this.props;
        deleteToto(id);
    }

    render(){
        let {
            id,
            content,
            isActive,
            todoOnChange,
        } = this.props;

        let {deleteToto} = this;

        return (
            <li
                className={isActive ? '' : "completed"}
            >
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={!isActive}
                        onChange={ ()=>todoOnChange(id) }
                    />
                    <label>
                        {content}
                    </label>
                    <button
                        className="destroy"
                        onClick={ deleteToto }
                    />
                </div>
                <input
                    ref="editField"
                    className="edit"
                />
            </li>
        )
    }
}
