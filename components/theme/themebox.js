// components/ThemedBox.js
import { useTheme } from '../../util/context/ThemeContext';
import styles from './ThemedBox.module.scss';

const ThemedBox = () => {
  const { themeColor } = useTheme();

  return (
    <div className={styles.box} style={{ backgroundColor: themeColor }}>
      Themed Box
    </div>
  );
};

export default ThemedBox;
