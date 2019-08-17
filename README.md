# Sheetbase Models

Commonly used sheet structures for using Google Spreadsheet with Sheetbase backend.

<!-- <block:header> -->

[![License][license_badge]][license_url] [![Support me on Patreon][patreon_badge]][patreon_url] [![PayPal][paypal_donate_badge]][paypal_donate_url] [![Ask me anything][ask_me_badge]][ask_me_url]

<!-- </block:header> -->

## Install & usage

`npm install --save @sheetbase/models`

```ts
import { Post } from '@sheetbase/models';

const posts: Post[] = [];
const post: Post = {};

```

## Models

### :blue_heart: Category `101` :earth_asia:

[Schema](https://github.com/sheetbase/models/blob/master/models/categories.json) | [Type](https://github.com/sheetbase/models/blob/master/src/category.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/categories.json)

`sheetbase db create categories`

### :blue_heart: Tag `102` :earth_asia:

[Schema](https://github.com/sheetbase/models/blob/master/models/tags.json) | [Type](https://github.com/sheetbase/models/blob/master/src/tag.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/tags.json)

`sheetbase db create tags`

### :blue_heart: Page `103` :earth_asia:

[Schema](https://github.com/sheetbase/models/blob/master/models/pages.json) | [Type](https://github.com/sheetbase/models/blob/master/src/page.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/pages.json)

`sheetbase db create pages`

### :blue_heart: Post `104` :earth_asia:

[Schema](https://github.com/sheetbase/models/blob/master/models/posts.json) | [Type](https://github.com/sheetbase/models/blob/master/src/post.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/posts.json)

`sheetbase db create posts`

### :blue_heart: Author `105` :earth_asia:

[Schema](https://github.com/sheetbase/models/blob/master/models/authors.json) | [Type](https://github.com/sheetbase/models/blob/master/src/author.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/authors.json)

`sheetbase db create authors`

### :blue_heart: Thread `106` :earth_asia:

[Schema](https://github.com/sheetbase/models/blob/master/models/threads.json) | [Type](https://github.com/sheetbase/models/blob/master/src/thread.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/threads.json)

`sheetbase db create threads`

### :blue_heart: User `107` :x:

[Schema](https://github.com/sheetbase/models/blob/master/models/users.json) | [Type](https://github.com/sheetbase/models/blob/master/src/user.ts)

`sheetbase db create users`

### :blue_heart: Option `108` :earth_asia:

[Schema](https://github.com/sheetbase/models/blob/master/models/options.json) | [Type](https://github.com/sheetbase/models/blob/master/src/option.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/options.json)

`sheetbase db create options`

### :green_heart: Bundle `111` :earth_asia:

[Schema](https://github.com/sheetbase/models/blob/master/models/bundles.json) | [Type](https://github.com/sheetbase/models/blob/master/src/bundle.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/bundles.json)

`sheetbase db create bundles`

### :green_heart: Audio `112` :earth_asia:

[Schema](https://github.com/sheetbase/models/blob/master/models/audios.json) | [Type](https://github.com/sheetbase/models/blob/master/src/audio.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/audios.json)

`sheetbase db create audios`

### :green_heart: Video `113` :earth_asia:

[Schema](https://github.com/sheetbase/models/blob/master/models/videos.json) | [Type](https://github.com/sheetbase/models/blob/master/src/video.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/videos.json)

`sheetbase db create videos`

### :green_heart: Product `114` :earth_asia:

[Schema](https://github.com/sheetbase/models/blob/master/models/products.json) | [Type](https://github.com/sheetbase/models/blob/master/src/product.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/products.json)

`sheetbase db create products`

### :heart: Order `161` :x:

[Schema](https://github.com/sheetbase/models/blob/master/models/orders.json) | [Type](https://github.com/sheetbase/models/blob/master/src/order.ts)

`sheetbase db create orders`

### :heart: Property `162` :x:

[Schema](https://github.com/sheetbase/models/blob/master/models/properties.json) | [Type](https://github.com/sheetbase/models/blob/master/src/property.ts)

`sheetbase db create properties`

### :purple_heart: Notification `181` :earth_asia:

[Schema](https://github.com/sheetbase/models/blob/master/models/notifications.json) | [Type](https://github.com/sheetbase/models/blob/master/src/notification.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/notifications.json)

`sheetbase db create notifications`

### :purple_heart: Promotion `182` :earth_asia:

[Schema](https://github.com/sheetbase/models/blob/master/models/promotions.json) | [Type](https://github.com/sheetbase/models/blob/master/src/promotion.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/promotions.json)

`sheetbase db create promotions`

## Field order

Sheet fields are sorted by groups.

- Ids: `#`, `title`, `$key`
- `type`
- Status: `status`
- `createdAt`, `updatedAt`
- `authors`
- Images: `thumbnail`, `image`
- Content: `description` | `excerpt`, `contentSource`, `content`
- (Specific properties)
- `locale`
- `origin`
- `parents`
- `relationships`
- Taxonomies: `categories`, `tags`
- Rating: `rating`
- Statistics: `viewCount`, `likeCount`, `commentCount`
- `keywords`
- Extras: `meta`

## Model

Every model is defined in a `.json` file. File name is a **plural** string of a content type (categories, posts, ...) and is used as the model name.

```ts
export interface Model {
  gid: string | number; // will be corverted to string
  public?: boolean;
  dataUrl?: string;
  schema: ModelSchema[];
}

export interface ModelSchema {
  name: string;
  width?: number;
  note?: string;
}
```

## Gid

A Google Sheets sheet is indentified by its `name` (categories, posts, ...) or its `gid` (a string number as can be seen in the url `#gid=0`). [@sheetbase/client](https://github.com/sheetbase/client) uses the `gid` to request the public data accordingly.

### Built-in models

A built-in model names its `gid` with 3 characters string number, prefix by `1`.

- :blue_heart: `10x`: major sheets
- :green_heart: `11x-15x`: custom content public sheets
- :heart: `16x-17x`: private sheets
- :purple_heart: `18x-19x`: miscellaneous sheets

### Custom models

You can use any string number (from 1-9 characters) for your custom models, but it should not starts with `1` for 3 characters `gid`.

Suggested covention:

- :green_heart: `[2-9]1x-[2-9]5x`: custom content public sheets
- :heart: `[2-9]6x-[2-9]7x`: private sheets
- :purple_heart: `[2-9]8x-[2-9]9x`: miscellaneous sheets

## Lisence

Sheetbase Models is released under the [MIT](https://github.com/sheetbase/models/blob/master/LICENSE) license.

<!-- <block:footer> -->

[license_badge]: https://img.shields.io/github/license/mashape/apistatus.svg
[license_url]: https://github.com/sheetbase/models/blob/master/LICENSE
[patreon_badge]: https://lamnhan.github.io/assets/images/badges/patreon.svg
[patreon_url]: https://www.patreon.com/lamnhan
[paypal_donate_badge]: https://lamnhan.github.io/assets/images/badges/paypal_donate.svg
[paypal_donate_url]: https://www.paypal.me/lamnhan
[ask_me_badge]: https://img.shields.io/badge/ask/me-anything-1abc9c.svg
[ask_me_url]: https://m.me/sheetbase

<!-- </block:footer> -->