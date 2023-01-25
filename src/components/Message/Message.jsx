import PropTypes from 'prop-types';
import s from './Message.module.css';

const Message = ({ children }) => (
  <div className={s.message}>{children}</div>
);

Message.defaultProps = {
  children: [],
};

Message.propTypes = {
  children: PropTypes.node,
};

export default Message;