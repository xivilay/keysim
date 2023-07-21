import { get_qs_values } from './qs';
import { loadState } from './localStorage';
import COLORWAYS from '../config/colorways/colorways';
import { getSettings, updateSettings } from '../config/settings_user_default';

const starting_colorway_options = [
    'cafe',
    'mecha',
    'lunar',
    'jamon',
    'bento',
    'olivia',
    'striker',
    'bushido',
    'oblivion',
    'nautilus',
    'vilebloom',
    'handarbeit',
    'hammerhead',
    'modern_dolch',
    'blue_samurai',
    'red_samurai',
];

const starting_layout_options = ['80'];

let randomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const getInitialState = () => {
    let qs = get_qs_values();
    let saved_colorways = loadState();
    const colorways = {};
    const cases = {};
    const keys = {};
    const settings = {};

    if (saved_colorways) {
        colorways.custom = saved_colorways.settings;
    }

    //set random initial values
    if (!qs) {
        colorways.active = randomItem(starting_colorway_options);
        cases.layout = randomItem(starting_layout_options);
        keys.legendSecondaryStyle = '';
    }

    if (saved_colorways && saved_colorways.active) {
        colorways.active = saved_colorways.active;
    }

    if (qs && qs['debug']) {
        settings.debug = true;
    }
    //set initial values if in query string
    if (qs && qs['size']) {
        cases.layout = qs['size'];
    }
    if (qs && qs['colorway']) {
        if (typeof qs['colorway'] === 'object') {
            if (!colorways.custom.find((x) => x.id === qs['colorway'].id)) {
                colorways.custom.push(qs['colorway']);
            }
            colorways.active = qs['colorway'].id;
        } else {
            colorways.active = qs['colorway'];
        }
    }
    if (qs && qs['legend']) {
        keys.legendPrimaryStyle = qs['legend'];
    }
    if (qs && qs['sub']) {
        keys.legendSecondaryStyle = qs['sub'];
    }
    if (qs && qs['cc']) {
        cases.primaryColor = `#${qs['cc']}`;
        cases.autoColor = false;
    }
    if (qs && qs['cf']) {
        cases.material = qs['cf'];
    }

    let accent = '';
    if (qs && typeof qs['colorway'] === 'object') {
        accent = qs['colorway'].swatches.accent.background;
    } else {
        accent = COLORWAYS[colorways?.active]?.swatches?.accent?.background;
    }
    settings.sceneColor = accent;
    updateSettings({ colorways, case: cases, keys, settings });
    return getSettings();
};

export const initial_settings = getInitialState();
