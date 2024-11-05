import type { PrototypeData } from 'factorio:common';
import { ItemGroup, ItemSubGroup, VirtualSignalPrototype } from 'factorio:prototype';

import { MODE_DIR, MODE_NAME } from './const';
import { categories } from './const/categories';

declare const data: PrototypeData;

data.extend([
  {
    icon: `${MODE_DIR}/graphics/icon/group.png`,
    icon_size: 128,
    name: MODE_NAME,
    order: 'zzz',
    type: 'item-group',
  } satisfies ItemGroup,
]);

for (const [index, category] of categories.entries()) {
  data.extend([
    {
      group: MODE_NAME,
      name: [MODE_NAME, category.id].join('-'),
      order: index.toString(),
      type: 'item-subgroup',
    } satisfies ItemSubGroup,
  ]);

  for (const name of category.emojis) {
    data.extend([
      {
        icon: `${MODE_DIR}/graphics/emoji/${name}.png`,
        icon_size: 64,
        name: [MODE_NAME, name].join('-'),
        subgroup: [MODE_NAME, category.id].join('-'),
        type: 'virtual-signal',
      } satisfies VirtualSignalPrototype,
    ]);
  }
}
