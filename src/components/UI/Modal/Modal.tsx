import { ReactNode } from 'react';

type Props = {
  visibility: boolean,
  onClose: () => void,
  children: ReactNode | Array<ReactNode>
}

const Modal = ({ visibility, onClose, children }: Props) => {
  const classes = ['modal'];
  if (visibility) classes.push('active');
  return (
    <div className={classes.join(' ')} onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <span className='close' onClick={onClose} >&times;</span>
        <h2 className='modal-title'>Add Task</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
