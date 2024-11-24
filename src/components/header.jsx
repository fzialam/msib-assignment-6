import { useDispatch } from "react-redux";

export const Header = () => {
    const dispatch = useDispatch();

    const handleClicked = (e) => {
        e.preventDefault();
        dispatch({ type: 'SET_SEARCH', payload: '' })
    }
    return (
        <a className="navbar-brand text-light"
            onClick={handleClicked}
            style={
                {
                    cursor: 'pointer'
                }
            }
        >
            Movies App
        </a>
    );
}