import css from './Filter.module.css'
import PropTypes from 'prop-types';


const Filter = ({value, onChangeFilter}) => {
    return (
       <div className={css.filter}>
         <label>Find contacts by name
            <input type="text" value={value} onChange={onChangeFilter}/>
        </label>
       </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func
}

export default Filter