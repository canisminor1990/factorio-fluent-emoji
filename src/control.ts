import { registerShortcodes } from './app/shortcodes';

script.on_init(() => {
  registerShortcodes();
});

script.on_configuration_changed((event) => {
  const cmc = event.mod_changes['better-chat'];
  if (cmc && cmc.old_version !== cmc.new_version) registerShortcodes();
});
