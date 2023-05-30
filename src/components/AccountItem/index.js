import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
   return (
      <div className={cx('wrapper')}>
         <img
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/da9fd1a3bb48c5bf704b0e54284a5e60~c5_100x100.jpeg?x-expires=1685638800&x-signature=nFGKFFWoDDHgEWQnp2X%2Fb4qaZEQ%3D"
            alt="avt"
         />
         <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span>Nguyen Van A</span>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx('userName')}>Nguyevana</span>{' '}
         </div>
      </div>
   );
}

export default AccountItem;
