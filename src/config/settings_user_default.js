const settings = {
  settings: {
      mute: true,
      debug: false,
      testing: false,
      mode: 'sidebar',
      sceneAutoColor: true,
      sceneColor: '#cccccc',
      glowColor: '#ffffff',
      highContrast: false,
      paintWithKeys: false,
  },
  case: {
      autoColor: true,
      primaryColor: '#333333',
      colorSecondary: '#eeeeee',
      style: 'CASE_2',
      bezel: 1,
      layout: '80',
      profile: 'high',
      material: 'brushed',
  },
  keys: {
      visible: true,
      profile: 'mx',
      legendPrimaryStyle: 'cherry',
      legendSecondaryStyle: '',
      activeBackground: '#51cf59',
      activeColor: '#ffffff',
  },
  switches: {
      stemColor: 'red',
      bodyColor: 'blue',
      soundProfile: 'default',
  },
  colorways: {
      editing: false,
      activeSwatch: 'accent',
      active: 'modern_dolch',
      custom: [],
  },
};

export const updateSettings = (nextSettings) => {
  Object.entries(nextSettings).forEach(([key, val]) => {
      settings[key] = { ...settings[key], ...val };
  });
};
export const getSettings = () => ({ ...settings });

const defaults = { updateSettings, getSettings };

export default defaults;
