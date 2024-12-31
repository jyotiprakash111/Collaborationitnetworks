// components/ThemeChanger.js
import { useTheme } from '../../util/context/ThemeContext';

const ThemeChanger = () => {
  const { setThemeColor } = useTheme();

  const handleChange = (event) => {
    setThemeColor(event.target.value);
  };

  return (
    <div>
      <input type="color" onChange={handleChange} />
    </div>
  );
};

export default ThemeChanger;
