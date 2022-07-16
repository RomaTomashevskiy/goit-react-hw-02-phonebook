import css from './Filter.module.css'

function Filter({ value, onChange }) {
    return (
        <label htmlFor="" className={css.filter_label}>
          Find contacts by name 
            <input type="text" value={value} onChange={onChange} className={css.filter_input} />
        </label>
    )
}

export default Filter;