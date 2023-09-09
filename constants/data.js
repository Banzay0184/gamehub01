const DATA = [
    {
        'id': 1,
        'title': 'Grand Theft Auto V',
        'img': 'https://upload.wikimedia.org/wikipedia/ru/thumb/c/c8/GTAV_Official_Cover_Art.jpg/274px-GTAV_Official_Cover_Art.jpg',
        'reviews': '6,100',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 2,
        'video': 'https://www.youtube.com/embed/QkkoHAzjnUs?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 2,
        'title': 'Cyberpunk 2077: Phantom Liberty',
        'img': 'https://images.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee_product_card_v2_mobile_slider_450.jpg',
        'reviews': '6,200',
        'date': 'September 26, 2023',
        'genres': 'Role-playing - Action - Sci-fi',
        'star': 4,
        'video': 'https://www.youtube.com/embed/4QGhsGvws58?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 3,
        'title': 'The Witcher 3: Wild Hunt - Complete Edition',
        'img': 'https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_card_v2_mobile_slider_639.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/JY6Bjij7XXE?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 4,
        'title': 'F1® 2020',
        'img': 'https://games-all.net/uploads/posts/2023-01/1673956495_f1.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/wF0vF1uXXYU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 5,
        'title': 'Minecraft: Java Edition 1.19.2 ',
        'img': 'https://games-all.net/uploads/posts/2023-01/1674942531_minecraft-java-edition-2.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/MmB9b5njVbA?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 6,
        'title': 'World of Tanks',
        'img': 'https://games-all.net/uploads/posts/2019-08/1566776279_7.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 3,
        'video': 'https://www.youtube.com/embed/J2kSkF4QEe0?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 7,
        'title': 'Act of War Gold Edition: Direct Action',
        'img': 'https://games-all.net/uploads/posts/2023-01/1674938377_act-of-war-gold-edition.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/tNExOOxlchI?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 8,
        'title': 'Lost Ark',
        'img': 'https://games-all.net/uploads/posts/2019-11/thumbs/1573858391_12.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/m0Ohi0g3Q8g?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 9,
        'title': 'Hello Neighbor 2 Alpha 1.5 ',
        'img': 'https://games-all.net/uploads/posts/2023-02/thumbs/hello-neighbor-2.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/ANwsrrQSE88?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 10,
        'title': 'NEXT RP  ',
        'img': 'https://games-all.net/uploads/posts/2020-06/thumbs/1591833632_4.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/5FcWiyGcNiQ?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 11,
        'title': 'Fortnite',
        'img': 'https://games-all.net/uploads/posts/2015-07/1436356452_fortnite.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/PhpNnd1FITU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 12,
        'title': 'Far Cry 5',
        'img': 'https://games-all.net/uploads/posts/2017-12/thumbs/1513625240_far-cry-5.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/a_8THGId85U?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 13,
        'title': 'Football Manager 2019 ',
        'img': 'https://games-all.net/uploads/posts/2019-02/thumbs/1549093465_football-manager-2019.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/nP6Osa26_7g?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 14,
        'title': 'Oriental Empires  ',
        'img': 'https://games-all.net/uploads/posts/2018-01/thumbs/1515397324_oriental-empires.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/0mDDuU24F6c?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 15,
        'title': 'Dragon\'s Lair 2: Time Warp   ',
        'img': 'https://games-all.net/uploads/posts/2018-01/thumbs/1514908250_dragons-lair-2-time-warp.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/HzCJ5XInUqA?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 16,
        'title': 'Gabelstapler 2014    ',
        'img': 'https://games-all.net/uploads/posts/2018-01/thumbs/1515253498_gabelstapler-2014.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/jWaX23MZ0Ag?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 17,
        'title': 'Ski World Simulator    ',
        'img': 'https://games-all.net/uploads/posts/2017-12/thumbs/1514116443_ski-world-simulator.png',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 3,
        'video': 'https://www.youtube.com/embed/EVsqQDdf9_Q?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 17,
        'title': 'Marvel vs. Capcom: Infinite',
        'img': 'https://games-all.net/uploads/posts/2017-12/thumbs/1513396931_marvel-vs.-capcom-infinite.png',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/L-8a6P7YKVA?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 18,
        'title': 'Рождественские Истории 6: Маленький Принц ',
        'img': 'https://games-all.net/uploads/posts/2017-12/thumbs/1513396627_christmas-stories-6-a-little-prince.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/So-RJHuxqHw?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 19,
        'title': 'Killer Instinct ',
        'img': 'https://games-all.net/uploads/posts/2017-12/thumbs/1513396329_killer-instinct.png',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/3LIL_MCJSoI?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 20,
        'title': 'My Summer Car  ',
        'img': 'https://games-all.net/uploads/posts/2017-01/thumbs/1484106406_my-summer-car.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/xXwYBapZun8?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 21,
        'title': 'Enlisted ',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1664538438_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 2,
        'video': 'https://www.youtube.com/embed/DIMXKvLRtq8?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 22,
        'title': 'Crossout ',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1664538541_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 3,
        'video': 'https://www.youtube.com/embed/yE8P78kVHLU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 23,
        'title': 'Warface ',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-12/1672345816_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/RzYhNpNKXPs?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 24,
        'title': 'World of Warships ',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-02/1677002741_cover2.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/TemOkfZe5_4?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 25,
        'title': 'Star Wars Jedi Survivor ',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-04/1680950982_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 2,
        'video': 'https://www.youtube.com/embed/_F6YBwIPzmk?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 26,
        'title': 'Dead Island 2 ',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-12/1670961819_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/aKFXvXjhBT8?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 27,
        'title': 'Battle Teams 2 ',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-06/1686397946_cover.png',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 2,
        'video': 'https://www.youtube.com/embed/Qj5rGh-ww7M?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 28,
        'title': 'Atomic Heart',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-12/1670561381_library_600x900_2x-1.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/njSGRN-VLAg?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 29,
        'title': 'Songs of Conquest',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1663623259_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 1,
        'video': 'https://www.youtube.com/embed/WtDQSUeQUPc?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 30,
        'title': 'Way of the Hunter',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1664489492_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 2,
        'video': 'https://www.youtube.com/embed/-UDoaPCTVr4?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 31,
        'title': 'Car Mechanic Simulator 2021',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-11/1668364052_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/9nxIEgWNLhc?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 32,
        'title': 'MotoGP 23',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-05/1683192317_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 1,
        'video': 'https://www.youtube.com/embed/4SEPRoC-dZQ?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 33,
        'title': 'WWE 2K23',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-01/1674493745_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/1f1qrRPfrYU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 34,
        'title': 'Assassins Creed 4 Black Flag',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-12/1670983093_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/OwsotWkpSlU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 35,
        'title': 'Farming Simulator 22',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1664308622_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 3,
        'video': 'https://www.youtube.com/embed/Kd1QeyouQOU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 36,
        'title': 'Gloomwood',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1666879778_library_600x900_2x-2.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 1,
        'video': 'https://www.youtube.com/embed/cUx0IxuoCgE?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 37,
        'title': 'Contraband Police\n',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-03/1678292732_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 3,
        'video': 'https://www.youtube.com/embed/cEP7ykalRCI?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 38,
        'title': 'Space Cats Tactics',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-07/1688678837_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 1,
        'video': 'https://www.youtube.com/embed/Geh8ypPh2ek?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 39,
        'title': 'House Flipper',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1666815966_library_600x900_2x-1.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/TQGg2HrRH2I?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 40,
        'title': 'Among Us',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1664320679_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/sYvKjZKunyo?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

]