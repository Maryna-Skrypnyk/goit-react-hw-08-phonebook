import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './LoaderSpinner.module.scss';

const LoaderSpinner = () => (
  <div className={styles.LoaderSpinner}>
    <Loader
      type="ThreeDots"
      color="#30d5c8"
      height={100}
      width={100}
      timeout={0}
    />
  </div>
);

export default LoaderSpinner;
