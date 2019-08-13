# Sheetbase Models

Commonly used sheet structures for using Google Spreadsheet with Sheetbase backend.

<!-- <block:header> -->

[![License][license_badge]][license_url] [![Support me on Patreon][patreon_badge]][patreon_url] [![PayPal][paypal_donate_badge]][paypal_donate_url] [![Ask me anything][ask_me_badge]][ask_me_url]

<!-- </block:header> -->

## Types

`npm install --save @sheetbase/models`

```ts
import { Post } from '@sheetbase/models';

const posts: Post[] = [];
const post: Post = {};

```

## Models

### Categories `101` :earth_asia:

- [Schema](https://github.com/sheetbase/models/blob/master/models/categories.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/category.ts)

### Tags `102` :earth_asia:

- [Schema](https://github.com/sheetbase/models/blob/master/models/tags.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/tag.ts)

### Pages `103` :earth_asia:

- [Schema](https://github.com/sheetbase/models/blob/master/models/pages.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/page.ts)

### Posts `104` :earth_asia:

- [Schema](https://github.com/sheetbase/models/blob/master/models/posts.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/post.ts)

### Threads `105` :earth_asia:

- [Schema](https://github.com/sheetbase/models/blob/master/models/threads.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/thread.ts)

### Users `106`

- [Schema](https://github.com/sheetbase/models/blob/master/models/users.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/user.ts)

### Products `107` :earth_asia:

- [Schema](https://github.com/sheetbase/models/blob/master/models/products.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/product.ts)

### Orders `108`

- [Schema](https://github.com/sheetbase/models/blob/master/models/orders.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/order.ts)

### Notifications `112` :earth_asia:

- [Schema](https://github.com/sheetbase/models/blob/master/models/notifications.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/notification.ts)

### Promotions `113` :earth_asia:

- [Schema](https://github.com/sheetbase/models/blob/master/models/promotions.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/promotion.ts)

### Audios `114` :earth_asia:

- [Schema](https://github.com/sheetbase/models/blob/master/models/audios.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/audio.ts)

### Videos `115` :earth_asia:

- [Schema](https://github.com/sheetbase/models/blob/master/models/videos.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/video.ts)

### Bundles `116` :earth_asia:

- [Schema](https://github.com/sheetbase/models/blob/master/models/bundles.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/bundle.ts)

### Authors `117` :earth_asia:

- [Schema](https://github.com/sheetbase/models/blob/master/models/authors.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/author.ts)

## Field order

Sheet fields are sorted by groups.

- Ids: `#`, `$key`
- `title`
- `type`
- `createdAt`, `updatedAt`
- `authors`
- Images: `thumbnail`, `image`
- Content: `description` | `excerpt`, `contentSource`, `content`
- (Custom properties)
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