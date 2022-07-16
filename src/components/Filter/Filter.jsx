import PropTypes from 'prop-types'; 
import css from './Filter.module.css'

function Filter({ value, onChange }) {
    return (
        <label htmlFor="" className={css.filter_label}>
          Find contacts by name 
            <input type="text" value={value} onChange={onChange} className={css.filter_input} />
        </label>
    )
}

Filter.prototype = { 
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default Filter;