import css from './SearchBox.module.css'

export default function SearchBox ({value, onSearch}) {
    return (
        <div>
            <p className={css.textSearch}>Find contacts by name</p>
            <input className={css.inputSearch} type="text" value={value} onChange={(evt) =>onSearch(evt.target.value)}/>
        </div>
    )
}