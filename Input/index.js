import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

function Input({ name, ...props }) {
  
  const value = useSelector((state) => state[name]);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch({
      type: 'CHANGE_VALUE',
      value: event.target.value,
      key: name,
    });
  };
  return (
    <input
      name={name}
      value={value ? value : ''}
      onChange={handleChange}
      {...props}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Input;