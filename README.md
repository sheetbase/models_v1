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

### Categories `101` :earth_asia:

`sheetbase db create categories`

[Schema](https://github.com/sheetbase/models/blob/master/models/categories.json) | [Type](https://github.com/sheetbase/models/blob/master/src/category.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/categories.ts)

### Tags `102` :earth_asia:

`sheetbase db create tags`

[Schema](https://github.com/sheetbase/models/blob/master/models/tags.json) | [Type](https://github.com/sheetbase/models/blob/master/src/tag.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/tags.ts)

### Pages `103` :earth_asia:

`sheetbase db create pages`

[Schema](https://github.com/sheetbase/models/blob/master/models/pages.json) | [Type](https://github.com/sheetbase/models/blob/master/src/page.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/pages.ts)

### Posts `104` :earth_asia:

`sheetbase db create posts`

[Schema](https://github.com/sheetbase/models/blob/master/models/posts.json) | [Type](https://github.com/sheetbase/models/blob/master/src/post.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/posts.ts)

### Threads `105` :earth_asia:

`sheetbase db create threads`

[Schema](https://github.com/sheetbase/models/blob/master/models/threads.json) | [Type](https://github.com/sheetbase/models/blob/master/src/thread.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/threads.ts)

### Users `106` :x:

`sheetbase db create users`

[Schema](https://github.com/sheetbase/models/blob/master/models/users.json) | [Type](https://github.com/sheetbase/models/blob/master/src/user.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/users.ts)

### Products `107` :earth_asia:

`sheetbase db create products`

[Schema](https://github.com/sheetbase/models/blob/master/models/products.json) | [Type](https://github.com/sheetbase/models/blob/master/src/product.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/products.ts)

### Orders `108` :x:

`sheetbase db create orders`

[Schema](https://github.com/sheetbase/models/blob/master/models/orders.json) | [Type](https://github.com/sheetbase/models/blob/master/src/order.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/orders.ts)

### Notifications `112` :earth_asia:

`sheetbase db create notifications`

[Schema](https://github.com/sheetbase/models/blob/master/models/notifications.json) | [Type](https://github.com/sheetbase/models/blob/master/src/notification.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/notifications.ts)

### Promotions `113` :earth_asia:

`sheetbase db create promotions`

[Schema](https://github.com/sheetbase/models/blob/master/models/promotions.json) | [Type](https://github.com/sheetbase/models/blob/master/src/promotion.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/promotions.ts)

### Audios `114` :earth_asia:

`sheetbase db create audios`

[Schema](https://github.com/sheetbase/models/blob/master/models/audios.json) | [Type](https://github.com/sheetbase/models/blob/master/src/audio.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/audios.ts)

### Videos `115` :earth_asia:

`sheetbase db create videos`

[Schema](https://github.com/sheetbase/models/blob/master/models/videos.json) | [Type](https://github.com/sheetbase/models/blob/master/src/video.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/videos.ts)

### Bundles `116` :earth_asia:

`sheetbase db create bundles`

[Schema](https://github.com/sheetbase/models/blob/master/models/bundles.json) | [Type](https://github.com/sheetbase/models/blob/master/src/bundle.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/bundles.ts)

### Authors `117` :earth_asia:

`sheetbase db create authors`

[Schema](https://github.com/sheetbase/models/blob/master/models/authors.json) | [Type](https://github.com/sheetbase/models/blob/master/src/author.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/authors.ts)

### Options `118` :earth_asia:

`sheetbase db create options`

[Schema](https://github.com/sheetbase/models/blob/master/models/options.json) | [Type](https://github.com/sheetbase/models/blob/master/src/option.ts) | [Sample](https://github.com/sheetbase/models/blob/master/data/options.ts)

## Field order

Sheet fields are sorted by groups.

- Ids: `#`, `$key`
- `title`
- `type`
- `status`
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