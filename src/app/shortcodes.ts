import { MODE_NAME } from '../const';
import { categories } from '../const/categories';

const genShortcodes = () => {
  const codes: { [key: string]: string } = {};
  for (const category of categories) {
    for (const name of category.emojis) {
      codes[name] = `[img=virtual-signal.${MODE_NAME}-${name}]`;
    }
  }
  return codes;
};

export const shortcodes = genShortcodes();

export const registerShortcodes = () => {
  if (script.active_mods['better-chat']) {
    remote.call('emojipack registration', 'add', script.mod_name, shortcodes);
  }
};
