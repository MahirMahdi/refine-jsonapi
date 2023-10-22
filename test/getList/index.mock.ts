import nock from "nock";

nock("https://api.fake-json-api.refine.dev:443", { encodedQueryParams: true })
  .get("/posts")
  .query({ "page[size]": "10", "page[number]": "0" })
  .reply(
    200,
    [
      {
        data: [
          {
            type: "posts",
            id: 1,
            attributes: {
              title:
                "Mollitia ipsam nisi in porro velit asperiores et quaerat dolorem.",
              slug: "vel-qui-dolorem",
              content:
                "Quam ducimus soluta voluptas qui illum recusandae occaecati. Inventore voluptate labore non. Perferendis dolorem cupiditate nemo iusto ut qui iure et. Iusto sunt ipsam et quia placeat minima odio. Et doloremque quis similique nulla vel omnis et vel ut. Dolorem totam similique est dignissimos fugit minima. Occaecati veniam suscipit quae quasi occaecati non illum incidunt omnis. Qui at fugiat non voluptatum quis. Autem odio voluptates vero qui temporibus. Repellendus et voluptatum.",
              hit: 858512,
              category: {
                id: 44,
              },
              user: {
                id: 14,
              },
              status: "rejected",
              createdAt: "2021-04-28T19:43:05.203Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "9144d5cd-977a-42fe-bfee-bcce61c567e8",
                  status: "done",
                  type: "image/jpeg",
                  uid: "da9b6491-5820-4347-90a0-cb735a21d787",
                },
              ],
              tags: [7, 5, 6],
              language: 3,
            },
          },
          {
            type: "posts",
            id: 2,
            attributes: {
              title: "Eos est est accusamus.",
              slug: "laborum-ducimus-suscipit",
              content:
                "Cum nemo optio odit officiis consequatur dolor necessitatibus. Et dolorem incidunt tenetur. Enim laboriosam pariatur omnis culpa et accusantium esse dolorum. Quas iste voluptatem impedit enim dolorem impedit aut. Quibusdam magni similique quis beatae vero rem. Qui qui officiis repudiandae soluta veritatis. Unde corrupti ut voluptas error quasi modi exercitationem. Et laborum qui vitae ut porro ex. Quod voluptatibus facilis quas nobis. Aut fugiat eveniet sit necessitatibus sapiente sunt eius.",
              hit: 197123,
              category: {
                id: 20,
              },
              user: {
                id: 8,
              },
              status: "draft",
              createdAt: "2019-09-17T11:04:27.561Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "b39124e2-a068-4744-a472-b903eb95338d",
                  status: "done",
                  type: "image/jpeg",
                  uid: "f00c870d-05ef-4a9f-9be8-fdb971ffb7b4",
                },
              ],
              tags: [8],
              language: 2,
            },
          },
          {
            type: "posts",
            id: 3,
            attributes: {
              title: "Aut dolorum saepe et qui consequatur sed rem incidunt.",
              slug: "in-architecto-deleniti",
              content:
                "Dolor aut impedit voluptates qui. In officiis voluptas repudiandae exercitationem. A commodi accusamus commodi modi quod. Suscipit assumenda iusto aut aperiam quasi eum est eos. Ipsum voluptatum earum. Sit doloremque voluptas sunt minima aut doloremque molestiae natus. Pariatur similique repellendus. Ipsum officiis ratione enim culpa ipsam voluptas et. Nulla aut eos eaque nulla sit. Sit possimus sed quia et.",
              hit: 375876,
              category: {
                id: 8,
              },
              user: {
                id: 31,
              },
              status: "draft",
              createdAt: "2020-07-20T17:52:57.899Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "31af30fb-80d4-4678-987c-39e3f64403bb",
                  status: "done",
                  type: "image/jpeg",
                  uid: "3b673d36-45d0-43f5-a56a-beee004fbda5",
                },
              ],
              tags: [6, 4],
              language: 3,
            },
          },
          {
            type: "posts",
            id: 4,
            attributes: {
              title: "Nostrum suscipit incidunt expedita quo rerum.",
              slug: "ullam-recusandae-accusamus",
              content:
                "Et dolorem dolor et et voluptas inventore ad ut. Voluptatem tempore minus et illum similique quas. Quis magnam id blanditiis voluptatem est ipsum qui illum quam. Quibusdam inventore ipsa labore amet ut. Praesentium possimus nihil beatae voluptates aperiam soluta magni. Vitae rerum et quod. Ipsam perspiciatis alias facilis ut aut maiores consequatur id quidem. Rem distinctio aut doloremque quia ex inventore repudiandae. Inventore dolorum dolorem maiores omnis minus voluptatum quae fugiat aut. Natus sit ut a.",
              hit: 267503,
              category: {
                id: 41,
              },
              user: {
                id: 1,
              },
              status: "rejected",
              createdAt: "2020-01-21T17:27:22.434Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "6eebfd0d-5d4e-42e8-9083-1b4e698cad35",
                  status: "done",
                  type: "image/jpeg",
                  uid: "079135f7-e5f5-4e55-bf53-34c125168b9f",
                },
              ],
              tags: [1, 7],
              language: 1,
            },
          },
          {
            type: "posts",
            id: 5,
            attributes: {
              title:
                "Dolorem non autem voluptatum consequuntur excepturi quis quis corrupti magnam.",
              slug: "mollitia-quam-magnam",
              content:
                "Cum nulla distinctio deserunt voluptatum. Et voluptas sapiente accusamus impedit aspernatur deleniti nesciunt optio quo. Cumque assumenda nobis corrupti est. Sunt qui recusandae autem dolorem nisi in vero nihil magni. Corrupti corrupti labore unde nemo. Deserunt earum itaque illum velit. Rem architecto vel cupiditate ipsam veritatis officia et consequatur. Beatae quos voluptate facere porro accusamus natus. Non rem accusantium a provident ipsum est blanditiis ab. Voluptate atque error officiis officiis.",
              hit: 267926,
              category: {
                id: 42,
              },
              user: {
                id: 13,
              },
              status: "published",
              createdAt: "2020-07-25T17:30:39.357Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "bf6e5c58-501d-4b75-bd35-8421ecb44706",
                  status: "done",
                  type: "image/jpeg",
                  uid: "c95295c5-d160-4ecb-a760-1679c6105840",
                },
              ],
              tags: [1],
              language: 2,
            },
          },
          {
            type: "posts",
            id: 6,
            attributes: {
              title:
                "Architecto corporis magnam dolore quidem enim facere est beatae doloribus.",
              slug: "inventore-repellendus-est",
              content:
                "Ad ea voluptatem praesentium sunt adipisci. Voluptatibus in et natus. Commodi dolores asperiores earum ex in incidunt. Maiores nihil eos consequuntur. Molestiae mollitia consectetur. Aut totam quia aut officiis a ut aut. Sint nisi sed quia eveniet praesentium reiciendis consectetur expedita beatae. Vero fugiat explicabo minima nobis consectetur ipsa. Explicabo est enim error. Molestiae exercitationem beatae id iste officiis temporibus est ut.",
              hit: 646111,
              category: {
                id: 12,
              },
              user: {
                id: 27,
              },
              status: "rejected",
              createdAt: "2019-06-28T04:33:38.651Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "c78bfa5b-84b6-41a3-8c3c-1e9bde40c28e",
                  status: "done",
                  type: "image/jpeg",
                  uid: "23163fa8-6fa8-467a-8ac0-77e58b958da9",
                },
              ],
              tags: [9],
              language: 1,
            },
          },
          {
            type: "posts",
            id: 7,
            attributes: {
              title: "Quis nobis repellat.",
              slug: "impedit-sed-voluptatem",
              content:
                "Temporibus nulla omnis non sed voluptatem consequatur et est qui. Ut deleniti non qui maiores consequatur et recusandae. Distinctio consequatur non nihil. Non sed reiciendis perspiciatis. Est hic similique. Exercitationem delectus esse ducimus. Sint numquam ipsum. Non ducimus sapiente eum omnis ex eligendi. Quod aut expedita fugiat voluptates eos. Incidunt laborum et odit sint qui vel facilis aut.",
              hit: 295012,
              category: {
                id: 45,
              },
              user: {
                id: 29,
              },
              status: "draft",
              createdAt: "2021-04-15T12:23:53.759Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "077c6f80-c15f-4873-a60e-4463a12d10f2",
                  status: "done",
                  type: "image/jpeg",
                  uid: "c5cf5b73-f62f-43f6-9724-9d889a60d754",
                },
              ],
              tags: [3],
              language: 2,
            },
          },
          {
            type: "posts",
            id: 8,
            attributes: {
              title: "Tenetur illum modi qui et asperiores maiores deserunt.",
              slug: "quos-rem-voluptas",
              content:
                "Repellat eum ut. Blanditiis ut aliquam et reiciendis magnam recusandae nesciunt. Magni possimus qui blanditiis. Voluptatibus velit rerum. Eligendi expedita ab cum amet sunt. Ut aliquid provident sed. Est earum numquam ut nostrum sint et recusandae quia maxime. Ut distinctio quibusdam. Velit magnam dolores vero labore et id magni est quis. Veniam dolores voluptates.",
              hit: 823688,
              category: {
                id: 23,
              },
              user: {
                id: 5,
              },
              status: "rejected",
              createdAt: "2020-12-06T01:21:01.191Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "9aa408e2-601f-474d-9832-626071cb077e",
                  status: "done",
                  type: "image/jpeg",
                  uid: "1e08e18e-4aeb-499f-9eac-3063182a6f00",
                },
              ],
              tags: [7, 8, 5],
              language: 3,
            },
          },
          {
            type: "posts",
            id: 9,
            attributes: {
              title:
                "Mollitia voluptatem molestiae magnam dolores vero deserunt culpa alias voluptatem.",
              slug: "veniam-dolores-veniam",
              content:
                "Accusantium fugit odit voluptatem in odit. Impedit pariatur eos vel neque. Hic tempora magnam quo quis ut et dolores. Provident sint nostrum voluptatum quaerat illum aperiam provident sed earum. Nulla maxime magni sunt dolorem repellendus iure. Dignissimos et itaque ut quaerat est sunt iusto. Itaque voluptatem totam quia at qui. Laboriosam itaque aut. Dolor doloribus consequatur aut. Qui repellat vero quas natus et vero dolores sequi exercitationem.",
              hit: 595493,
              category: {
                id: 15,
              },
              user: {
                id: 50,
              },
              status: "rejected",
              createdAt: "2021-04-15T15:55:00.138Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "938fe7f2-4ce1-40be-ba51-58f4b93de987",
                  status: "done",
                  type: "image/jpeg",
                  uid: "a7025a23-e1a1-4b77-a33a-e7cefa437338",
                },
              ],
              tags: [1, 4],
              language: 3,
            },
          },
          {
            type: "posts",
            id: 10,
            attributes: {
              title: "Consequuntur est tenetur sed impedit.",
              slug: "soluta-a-sed",
              content:
                "Iusto magnam eos. Id quidem expedita quae sit est eos reiciendis voluptatem dolor. Vel et ratione error aut nostrum qui et temporibus. Ex ipsam qui est porro voluptatem doloribus. Reiciendis nesciunt quia voluptate. Vero quaerat aut voluptatem nam laudantium illo incidunt rerum ut. Minima cum tempore cumque non. Nobis voluptates voluptatum fugiat qui. Nihil molestias et pariatur est commodi est mollitia magnam. Totam aut sit quia ducimus placeat.",
              hit: 27452,
              category: {
                id: 31,
              },
              user: {
                id: 31,
              },
              status: "published",
              createdAt: "2020-05-06T10:55:50.258Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "db179793-f9bb-4c65-b513-c82dc8288d8f",
                  status: "done",
                  type: "image/jpeg",
                  uid: "0e1fa473-bd3e-4a09-a9de-e8a7f5b8620c",
                },
              ],
              tags: [6, 4],
              language: 1,
            },
          },
        ],
      },
    ],
    [
      "Server",
      "nginx/1.17.10",
      "Date",
      "Sun, 08 Oct 2023 11:33:00 GMT",
      "Content-Type",
      "application/vnd.api+json",
      "Content-Length",
      "10695",
      "Connection",
      "close",
      "Vary",
      "Accept-Encoding",
      "X-Powered-By",
      "Express",
      "Vary",
      "Origin, Accept-Encoding",
      "Access-Control-Allow-Credentials",
      "true",
      "Cache-Control",
      "no-cache",
      "Pragma",
      "no-cache",
      "Expires",
      "-1",
      "Access-Control-Allow-Origin",
      "*",
      "X-Total-Count",
      "1000",
      "Access-Control-Expose-Headers",
      "X-Total-Count",
      "X-Content-Type-Options",
      "nosniff",
      "ETag",
      'W/"29c7-GLPmKvMkCcw+mw07kCbVySmgE/o"',
    ]
  );

nock("https://api.fake-json-api.refine.dev:443", { encodedQueryParams: true })
  .get("/posts")
  .query({ "page[size]": "10", "page[number]": "0", sort: "id" }) //ascending order
  .reply(
    200,
    [
      {
        data: [
          {
            type: "posts",
            id: 1,
            attributes: {
              title:
                "Mollitia ipsam nisi in porro velit asperiores et quaerat dolorem.",
              slug: "vel-qui-dolorem",
              content:
                "Quam ducimus soluta voluptas qui illum recusandae occaecati. Inventore voluptate labore non. Perferendis dolorem cupiditate nemo iusto ut qui iure et. Iusto sunt ipsam et quia placeat minima odio. Et doloremque quis similique nulla vel omnis et vel ut. Dolorem totam similique est dignissimos fugit minima. Occaecati veniam suscipit quae quasi occaecati non illum incidunt omnis. Qui at fugiat non voluptatum quis. Autem odio voluptates vero qui temporibus. Repellendus et voluptatum.",
              hit: 858512,
              category: {
                id: 44,
              },
              user: {
                id: 14,
              },
              status: "rejected",
              createdAt: "2021-04-28T19:43:05.203Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "9144d5cd-977a-42fe-bfee-bcce61c567e8",
                  status: "done",
                  type: "image/jpeg",
                  uid: "da9b6491-5820-4347-90a0-cb735a21d787",
                },
              ],
              tags: [7, 5, 6],
              language: 3,
            },
          },
          {
            type: "posts",
            id: 2,
            attributes: {
              title: "Eos est est accusamus.",
              slug: "laborum-ducimus-suscipit",
              content:
                "Cum nemo optio odit officiis consequatur dolor necessitatibus. Et dolorem incidunt tenetur. Enim laboriosam pariatur omnis culpa et accusantium esse dolorum. Quas iste voluptatem impedit enim dolorem impedit aut. Quibusdam magni similique quis beatae vero rem. Qui qui officiis repudiandae soluta veritatis. Unde corrupti ut voluptas error quasi modi exercitationem. Et laborum qui vitae ut porro ex. Quod voluptatibus facilis quas nobis. Aut fugiat eveniet sit necessitatibus sapiente sunt eius.",
              hit: 197123,
              category: {
                id: 20,
              },
              user: {
                id: 8,
              },
              status: "draft",
              createdAt: "2019-09-17T11:04:27.561Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "b39124e2-a068-4744-a472-b903eb95338d",
                  status: "done",
                  type: "image/jpeg",
                  uid: "f00c870d-05ef-4a9f-9be8-fdb971ffb7b4",
                },
              ],
              tags: [8],
              language: 2,
            },
          },
          {
            type: "posts",
            id: 3,
            attributes: {
              title: "Aut dolorum saepe et qui consequatur sed rem incidunt.",
              slug: "in-architecto-deleniti",
              content:
                "Dolor aut impedit voluptates qui. In officiis voluptas repudiandae exercitationem. A commodi accusamus commodi modi quod. Suscipit assumenda iusto aut aperiam quasi eum est eos. Ipsum voluptatum earum. Sit doloremque voluptas sunt minima aut doloremque molestiae natus. Pariatur similique repellendus. Ipsum officiis ratione enim culpa ipsam voluptas et. Nulla aut eos eaque nulla sit. Sit possimus sed quia et.",
              hit: 375876,
              category: {
                id: 8,
              },
              user: {
                id: 31,
              },
              status: "draft",
              createdAt: "2020-07-20T17:52:57.899Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "31af30fb-80d4-4678-987c-39e3f64403bb",
                  status: "done",
                  type: "image/jpeg",
                  uid: "3b673d36-45d0-43f5-a56a-beee004fbda5",
                },
              ],
              tags: [6, 4],
              language: 3,
            },
          },
          {
            type: "posts",
            id: 4,
            attributes: {
              title: "Nostrum suscipit incidunt expedita quo rerum.",
              slug: "ullam-recusandae-accusamus",
              content:
                "Et dolorem dolor et et voluptas inventore ad ut. Voluptatem tempore minus et illum similique quas. Quis magnam id blanditiis voluptatem est ipsum qui illum quam. Quibusdam inventore ipsa labore amet ut. Praesentium possimus nihil beatae voluptates aperiam soluta magni. Vitae rerum et quod. Ipsam perspiciatis alias facilis ut aut maiores consequatur id quidem. Rem distinctio aut doloremque quia ex inventore repudiandae. Inventore dolorum dolorem maiores omnis minus voluptatum quae fugiat aut. Natus sit ut a.",
              hit: 267503,
              category: {
                id: 41,
              },
              user: {
                id: 1,
              },
              status: "rejected",
              createdAt: "2020-01-21T17:27:22.434Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "6eebfd0d-5d4e-42e8-9083-1b4e698cad35",
                  status: "done",
                  type: "image/jpeg",
                  uid: "079135f7-e5f5-4e55-bf53-34c125168b9f",
                },
              ],
              tags: [1, 7],
              language: 1,
            },
          },
          {
            type: "posts",
            id: 5,
            attributes: {
              title:
                "Dolorem non autem voluptatum consequuntur excepturi quis quis corrupti magnam.",
              slug: "mollitia-quam-magnam",
              content:
                "Cum nulla distinctio deserunt voluptatum. Et voluptas sapiente accusamus impedit aspernatur deleniti nesciunt optio quo. Cumque assumenda nobis corrupti est. Sunt qui recusandae autem dolorem nisi in vero nihil magni. Corrupti corrupti labore unde nemo. Deserunt earum itaque illum velit. Rem architecto vel cupiditate ipsam veritatis officia et consequatur. Beatae quos voluptate facere porro accusamus natus. Non rem accusantium a provident ipsum est blanditiis ab. Voluptate atque error officiis officiis.",
              hit: 267926,
              category: {
                id: 42,
              },
              user: {
                id: 13,
              },
              status: "published",
              createdAt: "2020-07-25T17:30:39.357Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "bf6e5c58-501d-4b75-bd35-8421ecb44706",
                  status: "done",
                  type: "image/jpeg",
                  uid: "c95295c5-d160-4ecb-a760-1679c6105840",
                },
              ],
              tags: [1],
              language: 2,
            },
          },
          {
            type: "posts",
            id: 6,
            attributes: {
              title:
                "Architecto corporis magnam dolore quidem enim facere est beatae doloribus.",
              slug: "inventore-repellendus-est",
              content:
                "Ad ea voluptatem praesentium sunt adipisci. Voluptatibus in et natus. Commodi dolores asperiores earum ex in incidunt. Maiores nihil eos consequuntur. Molestiae mollitia consectetur. Aut totam quia aut officiis a ut aut. Sint nisi sed quia eveniet praesentium reiciendis consectetur expedita beatae. Vero fugiat explicabo minima nobis consectetur ipsa. Explicabo est enim error. Molestiae exercitationem beatae id iste officiis temporibus est ut.",
              hit: 646111,
              category: {
                id: 12,
              },
              user: {
                id: 27,
              },
              status: "rejected",
              createdAt: "2019-06-28T04:33:38.651Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "c78bfa5b-84b6-41a3-8c3c-1e9bde40c28e",
                  status: "done",
                  type: "image/jpeg",
                  uid: "23163fa8-6fa8-467a-8ac0-77e58b958da9",
                },
              ],
              tags: [9],
              language: 1,
            },
          },
          {
            type: "posts",
            id: 7,
            attributes: {
              title: "Quis nobis repellat.",
              slug: "impedit-sed-voluptatem",
              content:
                "Temporibus nulla omnis non sed voluptatem consequatur et est qui. Ut deleniti non qui maiores consequatur et recusandae. Distinctio consequatur non nihil. Non sed reiciendis perspiciatis. Est hic similique. Exercitationem delectus esse ducimus. Sint numquam ipsum. Non ducimus sapiente eum omnis ex eligendi. Quod aut expedita fugiat voluptates eos. Incidunt laborum et odit sint qui vel facilis aut.",
              hit: 295012,
              category: {
                id: 45,
              },
              user: {
                id: 29,
              },
              status: "draft",
              createdAt: "2021-04-15T12:23:53.759Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "077c6f80-c15f-4873-a60e-4463a12d10f2",
                  status: "done",
                  type: "image/jpeg",
                  uid: "c5cf5b73-f62f-43f6-9724-9d889a60d754",
                },
              ],
              tags: [3],
              language: 2,
            },
          },
          {
            type: "posts",
            id: 8,
            attributes: {
              title: "Tenetur illum modi qui et asperiores maiores deserunt.",
              slug: "quos-rem-voluptas",
              content:
                "Repellat eum ut. Blanditiis ut aliquam et reiciendis magnam recusandae nesciunt. Magni possimus qui blanditiis. Voluptatibus velit rerum. Eligendi expedita ab cum amet sunt. Ut aliquid provident sed. Est earum numquam ut nostrum sint et recusandae quia maxime. Ut distinctio quibusdam. Velit magnam dolores vero labore et id magni est quis. Veniam dolores voluptates.",
              hit: 823688,
              category: {
                id: 23,
              },
              user: {
                id: 5,
              },
              status: "rejected",
              createdAt: "2020-12-06T01:21:01.191Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "9aa408e2-601f-474d-9832-626071cb077e",
                  status: "done",
                  type: "image/jpeg",
                  uid: "1e08e18e-4aeb-499f-9eac-3063182a6f00",
                },
              ],
              tags: [7, 8, 5],
              language: 3,
            },
          },
          {
            type: "posts",
            id: 9,
            attributes: {
              title:
                "Mollitia voluptatem molestiae magnam dolores vero deserunt culpa alias voluptatem.",
              slug: "veniam-dolores-veniam",
              content:
                "Accusantium fugit odit voluptatem in odit. Impedit pariatur eos vel neque. Hic tempora magnam quo quis ut et dolores. Provident sint nostrum voluptatum quaerat illum aperiam provident sed earum. Nulla maxime magni sunt dolorem repellendus iure. Dignissimos et itaque ut quaerat est sunt iusto. Itaque voluptatem totam quia at qui. Laboriosam itaque aut. Dolor doloribus consequatur aut. Qui repellat vero quas natus et vero dolores sequi exercitationem.",
              hit: 595493,
              category: {
                id: 15,
              },
              user: {
                id: 50,
              },
              status: "rejected",
              createdAt: "2021-04-15T15:55:00.138Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "938fe7f2-4ce1-40be-ba51-58f4b93de987",
                  status: "done",
                  type: "image/jpeg",
                  uid: "a7025a23-e1a1-4b77-a33a-e7cefa437338",
                },
              ],
              tags: [1, 4],
              language: 3,
            },
          },
          {
            type: "posts",
            id: 10,
            attributes: {
              title: "Consequuntur est tenetur sed impedit.",
              slug: "soluta-a-sed",
              content:
                "Iusto magnam eos. Id quidem expedita quae sit est eos reiciendis voluptatem dolor. Vel et ratione error aut nostrum qui et temporibus. Ex ipsam qui est porro voluptatem doloribus. Reiciendis nesciunt quia voluptate. Vero quaerat aut voluptatem nam laudantium illo incidunt rerum ut. Minima cum tempore cumque non. Nobis voluptates voluptatum fugiat qui. Nihil molestias et pariatur est commodi est mollitia magnam. Totam aut sit quia ducimus placeat.",
              hit: 27452,
              category: {
                id: 31,
              },
              user: {
                id: 31,
              },
              status: "published",
              createdAt: "2020-05-06T10:55:50.258Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "db179793-f9bb-4c65-b513-c82dc8288d8f",
                  status: "done",
                  type: "image/jpeg",
                  uid: "0e1fa473-bd3e-4a09-a9de-e8a7f5b8620c",
                },
              ],
              tags: [6, 4],
              language: 1,
            },
          },
        ],
      },
    ],
    [
      "Server",
      "nginx/1.17.10",
      "Date",
      "Mon, 21 Jun 2021 11:21:39 GMT",
      "Content-Type",
      "application/vnd.api+json",
      "Content-Length",
      "10695",
      "Connection",
      "close",
      "Vary",
      "Accept-Encoding",
      "X-Powered-By",
      "Express",
      "Vary",
      "Origin, Accept-Encoding",
      "Access-Control-Allow-Credentials",
      "true",
      "Cache-Control",
      "no-cache",
      "Pragma",
      "no-cache",
      "Expires",
      "-1",
      "Access-Control-Allow-Origin",
      "*",
      "X-Total-Count",
      "1000",
      "Access-Control-Expose-Headers",
      "X-Total-Count",
      "X-Content-Type-Options",
      "nosniff",
      "ETag",
      'W/"29c7-GLPmKvMkCcw+mw07kCbVySmgE/o"',
    ]
  );

nock("https://api.fake-json-api.refine.dev:443", { encodedQueryParams: true })
  .get("/posts")
  .query({
    "page[size]": "10",
    "page[number]": "0",
    "filter[category.id][eq]": "1",
  })
  .reply(
    200,
    [
      {
        data: [
          {
            type: "posts",
            id: 44,
            attributes: {
              title: "Et eum fugit aliquam est et ducimus cum et veniam.",
              slug: "labore-modi-unde",
              content: "Accusamus iure eos eos qui id nesciunt...",
              hit: 84661,
              status: "draft",
              createdAt: "2019-09-17T18:55:38.232Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "eb5ef88c-61f9-4861-9c0a-e2a98bf13b61",
                  status: "done",
                  type: "image/jpeg",
                  uid: "1447eba2-8fa8-4292-97bb-0d320d3587f0",
                },
              ],
              tags: [5, 7],
              language: 3,
              category: {
                id: 1,
              },
              user: {
                id: 4,
              },
            },
          },
          {
            type: "posts",
            id: 75,
            attributes: {
              title: "Et modi id.",
              slug: "voluptatem-quis-rerum",
              content: "Commodi dolorem expedita corporis occaecati...",
              hit: 444728,
              status: "rejected",
              createdAt: "2020-12-25T13:23:41.827Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "ebbaf4de-54cb-4189-88df-5caffb78dc37",
                  status: "done",
                  type: "image/jpeg",
                  uid: "d6d8e449-c79f-4ffd-9b43-937e2a1d2f3b",
                },
              ],
              tags: [3],
              language: 3,
              category: {
                id: 1,
              },
              user: {
                id: 50,
              },
            },
          },
          {
            type: "posts",
            id: 115,
            attributes: {
              title:
                "In dignissimos dolor doloremque laborum possimus corrupti ut similique minus.",
              slug: "nihil-cupiditate-officiis",
              content:
                "Tempore est commodi a ut. Eos ex ullam et exercitationem...",
              hit: 977447,
              status: "published",
              createdAt: "2019-11-23T22:55:29.848Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "292c6a96-2ceb-4ed1-96b2-21f0299fd849",
                  status: "done",
                  type: "image/jpeg",
                  uid: "2a1fd735-648f-4768-b509-922838986f8f",
                },
              ],
              tags: [8, 9, 3],
              language: 2,
              category: {
                id: 1,
              },
              user: {
                id: 31,
              },
            },
          },
          {
            type: "posts",
            id: 127,
            attributes: {
              title: "Debitis sed ut voluptate at temporibus soluta.",
              slug: "optio-qui-tenetur",
              content:
                "Quaerat earum est nihil consectetur aut debitis recusandae esse...",
              hit: 56553,
              status: "published",
              createdAt: "2019-10-14T04:02:21.496Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "d60bd008-665b-4ec4-ad01-7d5fe02d5c39",
                  status: "done",
                  type: "image/jpeg",
                  uid: "1c9ff9a4-7e53-4c6f-ba75-fcd0671a4df1",
                },
              ],
              tags: [4],
              language: 2,
              category: {
                id: 1,
              },
              user: {
                id: 11,
              },
            },
          },
          {
            type: "posts",
            id: 151,
            attributes: {
              title: "Neque qui id quia.",
              slug: "consequatur-dolorem-reiciendis",
              content:
                "Debitis sapiente qui blanditiis temporibus ad dolorem enim deserunt officiis...",
              hit: 47687,
              status: "published",
              createdAt: "2020-07-05T23:07:51.125Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "80ecf4d3-f8f4-4e05-bd9d-50bb156529d3",
                  status: "done",
                  type: "image/jpeg",
                  uid: "c4a5f2f2-373f-4422-bcea-94c9d23f6ee7",
                },
              ],
              tags: [7, 5, 3],
              language: 1,
              category: {
                id: 1,
              },
              user: {
                id: 19,
              },
            },
          },
          {
            type: "posts",
            id: 462,
            attributes: {
              title: "Iusto doloribus velit aut ut.",
              slug: "qui-delectus-placeat",
              content:
                "Aspernatur ipsa mollitia ad odio laudantium possimus sed et. Non voluptatem maxime aut quisquam sit...",
              hit: 155374,
              status: "draft",
              createdAt: "2020-11-28T18:55:11.352Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "ee969863-5854-4570-b474-369436c3d861",
                  status: "done",
                  type: "image/jpeg",
                  uid: "b840bc3e-4d0e-40b2-8835-b0137679946d",
                },
              ],
              tags: [4],
              language: 1,
              category: {
                id: 1,
              },
              user: {
                id: 33,
              },
            },
          },
          {
            type: "posts",
            id: 483,
            attributes: {
              title: "Sequi ab neque maiores dolor dolores ut.",
              slug: "iure-quibusdam-minus",
              content:
                "Quod numquam quam accusamus. Modi reiciendis omnis et aut accusantium perspiciatis et adipisci consequuntur...",
              hit: 47216,
              status: "rejected",
              createdAt: "2020-01-15T18:42:02.469Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "160a465a-2eca-4c62-9f66-e39802113cf8",
                  status: "done",
                  type: "image/jpeg",
                  uid: "5c8e2d38-c40e-4031-9a91-1c24afd1309d",
                },
              ],
              tags: [3],
              language: 1,
              category: {
                id: 1,
              },
              user: {
                id: 43,
              },
            },
          },
          {
            type: "posts",
            id: 617,
            attributes: {
              title: "Aperiam non et.",
              slug: "perspiciatis-ea-maxime",
              content:
                "Accusantium et ea nihil sit. Quia minima qui esse repudiandae molestiae...",
              hit: 512,
              status: "published",
              createdAt: "2021-06-13T12:52:08.459Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "00777f91-b587-4e57-b2a2-c9c9be5c1904",
                  status: "done",
                  type: "image/jpeg",
                  uid: "fa5cb4a7-99ff-41e1-a441-34f16136898e",
                },
              ],
              tags: [8],
              language: 3,
              category: {
                id: 1,
              },
              user: {
                id: 47,
              },
            },
          },
          {
            type: "posts",
            id: 622,
            attributes: {
              title:
                "Maxime est autem cupiditate culpa voluptatem natus quidem doloremque.",
              slug: "earum-voluptas-corporis",
              content:
                "Nulla voluptatem quo impedit voluptate quibusdam facilis et quasi dolorem. Officia in ratione ex libero rerum...",
              hit: 913434,
              status: "rejected",
              createdAt: "2019-06-22T19:24:19.494Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "4fda0ad1-2c51-4e44-818a-35ae61e4e2b4",
                  status: "done",
                  type: "image/jpeg",
                  uid: "aea68791-7db6-497e-8cbb-087561263483",
                },
              ],
              tags: [9, 2],
              language: 2,
              category: {
                id: 1,
              },
              user: {
                id: 49,
              },
            },
          },
          {
            type: "posts",
            id: 644,
            attributes: {
              title: "Dolorem laboriosam et est modi rerum placeat iusto.",
              slug: "vero-aut-neque",
              content:
                "Velit quo harum assumenda. Consectetur quidem mollitia ex inventore. Iste itaque similique quod velit facere quaerat...",
              hit: 272834,
              status: "draft",
              createdAt: "2019-08-15T12:27:39.919Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "86c5bd92-438c-4f4b-8b30-c4de9eeb9fd1",
                  status: "done",
                  type: "image/jpeg",
                  uid: "c70deb9d-bae1-41c6-b71c-ee352c2721ac",
                },
              ],
              tags: [2, 4],
              language: 3,
              category: {
                id: 1,
              },
              user: {
                id: 33,
              },
            },
          },
        ],
      },
    ],
    [
      "Server",
      "nginx/1.17.10",
      "Date",
      "Mon, 21 Jun 2021 11:21:39 GMT",
      "Content-Type",
      "application/vnd.api+json",
      "Content-Length",
      "10542",
      "Connection",
      "close",
      "Vary",
      "Accept-Encoding",
      "X-Powered-By",
      "Express",
      "Vary",
      "Origin, Accept-Encoding",
      "Access-Control-Allow-Credentials",
      "true",
      "Cache-Control",
      "no-cache",
      "Pragma",
      "no-cache",
      "Expires",
      "-1",
      "Access-Control-Allow-Origin",
      "*",
      "X-Total-Count",
      "17",
      "Access-Control-Expose-Headers",
      "X-Total-Count",
      "X-Content-Type-Options",
      "nosniff",
      "ETag",
      'W/"292e-QyaIdJgeENcIUIgHmY1COHjk5N0"',
    ]
  );

nock("https://api.fake-json-api.refine.dev:443", { encodedQueryParams: true })
  .get("/posts")
  .query({
    "page[size]": "10",
    "page[number]": "0",
    sort: "id",
    "filter[category.id][eq]": "1",
  })
  .reply(
    200,
    [
      {
        data: [
          {
            type: "posts",
            id: 44,
            attributes: {
              title: "Et eum fugit aliquam est et ducimus cum et veniam.",
              slug: "labore-modi-unde",
              content: "Accusamus iure eos eos qui id nesciunt...",
              hit: 84661,
              status: "draft",
              createdAt: "2019-09-17T18:55:38.232Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "eb5ef88c-61f9-4861-9c0a-e2a98bf13b61",
                  status: "done",
                  type: "image/jpeg",
                  uid: "1447eba2-8fa8-4292-97bb-0d320d3587f0",
                },
              ],
              tags: [5, 7],
              language: 3,
              category: {
                id: 1,
              },
              user: {
                id: 4,
              },
            },
          },
          {
            type: "posts",
            id: 75,
            attributes: {
              title: "Et modi id.",
              slug: "voluptatem-quis-rerum",
              content: "Commodi dolorem expedita corporis occaecati...",
              hit: 444728,
              status: "rejected",
              createdAt: "2020-12-25T13:23:41.827Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "ebbaf4de-54cb-4189-88df-5caffb78dc37",
                  status: "done",
                  type: "image/jpeg",
                  uid: "d6d8e449-c79f-4ffd-9b43-937e2a1d2f3b",
                },
              ],
              tags: [3],
              language: 3,
              category: {
                id: 1,
              },
              user: {
                id: 50,
              },
            },
          },
          {
            type: "posts",
            id: 115,
            attributes: {
              title:
                "In dignissimos dolor doloremque laborum possimus corrupti ut similique minus.",
              slug: "nihil-cupiditate-officiis",
              content:
                "Tempore est commodi a ut. Eos ex ullam et exercitationem...",
              hit: 977447,
              status: "published",
              createdAt: "2019-11-23T22:55:29.848Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "292c6a96-2ceb-4ed1-96b2-21f0299fd849",
                  status: "done",
                  type: "image/jpeg",
                  uid: "2a1fd735-648f-4768-b509-922838986f8f",
                },
              ],
              tags: [8, 9, 3],
              language: 2,
              category: {
                id: 1,
              },
              user: {
                id: 31,
              },
            },
          },
          {
            type: "posts",
            id: 127,
            attributes: {
              title: "Debitis sed ut voluptate at temporibus soluta.",
              slug: "optio-qui-tenetur",
              content:
                "Quaerat earum est nihil consectetur aut debitis recusandae esse...",
              hit: 56553,
              status: "published",
              createdAt: "2019-10-14T04:02:21.496Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "d60bd008-665b-4ec4-ad01-7d5fe02d5c39",
                  status: "done",
                  type: "image/jpeg",
                  uid: "1c9ff9a4-7e53-4c6f-ba75-fcd0671a4df1",
                },
              ],
              tags: [4],
              language: 2,
              category: {
                id: 1,
              },
              user: {
                id: 11,
              },
            },
          },
          {
            type: "posts",
            id: 151,
            attributes: {
              title: "Neque qui id quia.",
              slug: "consequatur-dolorem-reiciendis",
              content:
                "Debitis sapiente qui blanditiis temporibus ad dolorem enim deserunt officiis...",
              hit: 47687,
              status: "published",
              createdAt: "2020-07-05T23:07:51.125Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "80ecf4d3-f8f4-4e05-bd9d-50bb156529d3",
                  status: "done",
                  type: "image/jpeg",
                  uid: "c4a5f2f2-373f-4422-bcea-94c9d23f6ee7",
                },
              ],
              tags: [7, 5, 3],
              language: 1,
              category: {
                id: 1,
              },
              user: {
                id: 19,
              },
            },
          },
          {
            type: "posts",
            id: 462,
            attributes: {
              title: "Iusto doloribus velit aut ut.",
              slug: "qui-delectus-placeat",
              content:
                "Aspernatur ipsa mollitia ad odio laudantium possimus sed et. Non voluptatem maxime aut quisquam sit...",
              hit: 155374,
              status: "draft",
              createdAt: "2020-11-28T18:55:11.352Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "ee969863-5854-4570-b474-369436c3d861",
                  status: "done",
                  type: "image/jpeg",
                  uid: "b840bc3e-4d0e-40b2-8835-b0137679946d",
                },
              ],
              tags: [4],
              language: 1,
              category: {
                id: 1,
              },
              user: {
                id: 33,
              },
            },
          },
          {
            type: "posts",
            id: 483,
            attributes: {
              title: "Sequi ab neque maiores dolor dolores ut.",
              slug: "iure-quibusdam-minus",
              content:
                "Quod numquam quam accusamus. Modi reiciendis omnis et aut accusantium perspiciatis et adipisci consequuntur...",
              hit: 47216,
              status: "rejected",
              createdAt: "2020-01-15T18:42:02.469Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "160a465a-2eca-4c62-9f66-e39802113cf8",
                  status: "done",
                  type: "image/jpeg",
                  uid: "5c8e2d38-c40e-4031-9a91-1c24afd1309d",
                },
              ],
              tags: [3],
              language: 1,
              category: {
                id: 1,
              },
              user: {
                id: 43,
              },
            },
          },
          {
            type: "posts",
            id: 617,
            attributes: {
              title: "Aperiam non et.",
              slug: "perspiciatis-ea-maxime",
              content:
                "Accusantium et ea nihil sit. Quia minima qui esse repudiandae molestiae...",
              hit: 512,
              status: "published",
              createdAt: "2021-06-13T12:52:08.459Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "00777f91-b587-4e57-b2a2-c9c9be5c1904",
                  status: "done",
                  type: "image/jpeg",
                  uid: "fa5cb4a7-99ff-41e1-a441-34f16136898e",
                },
              ],
              tags: [8],
              language: 3,
              category: {
                id: 1,
              },
              user: {
                id: 47,
              },
            },
          },
          {
            type: "posts",
            id: 622,
            attributes: {
              title:
                "Maxime est autem cupiditate culpa voluptatem natus quidem doloremque.",
              slug: "earum-voluptas-corporis",
              content:
                "Nulla voluptatem quo impedit voluptate quibusdam facilis et quasi dolorem. Officia in ratione ex libero rerum...",
              hit: 913434,
              status: "rejected",
              createdAt: "2019-06-22T19:24:19.494Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "4fda0ad1-2c51-4e44-818a-35ae61e4e2b4",
                  status: "done",
                  type: "image/jpeg",
                  uid: "aea68791-7db6-497e-8cbb-087561263483",
                },
              ],
              tags: [9, 2],
              language: 2,
              category: {
                id: 1,
              },
              user: {
                id: 49,
              },
            },
          },
          {
            type: "posts",
            id: 644,
            attributes: {
              title: "Dolorem laboriosam et est modi rerum placeat iusto.",
              slug: "vero-aut-neque",
              content:
                "Velit quo harum assumenda. Consectetur quidem mollitia ex inventore. Iste itaque similique quod velit facere quaerat...",
              hit: 272834,
              status: "draft",
              createdAt: "2019-08-15T12:27:39.919Z",
              image: [
                {
                  url: "http://placeimg.com/640/480",
                  name: "86c5bd92-438c-4f4b-8b30-c4de9eeb9fd1",
                  status: "done",
                  type: "image/jpeg",
                  uid: "c70deb9d-bae1-41c6-b71c-ee352c2721ac",
                },
              ],
              tags: [2, 4],
              language: 3,
              category: {
                id: 1,
              },
              user: {
                id: 33,
              },
            },
          },
        ],
      },
    ],
    [
      "Server",
      "nginx/1.17.10",
      "Date",
      "Mon, 21 Jun 2021 11:24:47 GMT",
      "Content-Type",
      "application/vnd.api+json",
      "Content-Length",
      "10542",
      "Connection",
      "close",
      "Vary",
      "Accept-Encoding",
      "X-Powered-By",
      "Express",
      "Vary",
      "Origin, Accept-Encoding",
      "Access-Control-Allow-Credentials",
      "true",
      "Cache-Control",
      "no-cache",
      "Pragma",
      "no-cache",
      "Expires",
      "-1",
      "Access-Control-Allow-Origin",
      "*",
      "X-Total-Count",
      "17",
      "Access-Control-Expose-Headers",
      "X-Total-Count",
      "X-Content-Type-Options",
      "nosniff",
      "ETag",
      'W/"292e-QyaIdJgeENcIUIgHmY1COHjk5N0"',
    ]
  );
