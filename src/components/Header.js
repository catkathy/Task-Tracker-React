// Can be a class or function
// Import arrow function
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            {/* Add a button */}
            <Button
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd}
            />
        </header>
    );
};

// const Header = ({ title }) => {
//     return (
//         <header>
//             <h1 style={{ color: 'white', backgroundColor: 'black' }}>
//                 {title} // css in js
//             </h1>
//         </header>
//     );
// };

Header.defaultProps = {
    title: 'Test Tracker',
}; // Default

Header.prototype = {
    title: PropTypes.string.isRequired,
};

export default Header;
