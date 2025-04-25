import css from './SearchBox.module.css'
import { useSelector } from "react-redux";

export default function SearchBox ({ onSearch}) {
    const filter = useSelector(state=>state.filters.name)
    return (
        <div>
            <p className={css.textSearch}>Find contacts by name</p>
            <input className={css.inputSearch} type="text" value={filter} onChange={(evt) =>onSearch(evt.target.value)}/>
        </div>
    )
}
//value,