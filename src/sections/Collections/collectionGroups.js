import categoryItems from "@/sections/Categories/categoryItems";

const collectionGroups = [
  {
    isActive: true,
    title: 'Movies',
    items: [
      {
        title: `Our Genres`,
        categoryItems
      },
      {
        title: `Popular Top 10 In Genres`,
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },
          {
            title: 'Horror',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/horror/1.jpg',
              '/src/assets/images/categories/horror/2.jpg',
              '/src/assets/images/categories/horror/3.jpg',
              '/src/assets/images/categories/horror/4.jpg',
            ]
          },
          {
            title: 'Animated',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Fantasy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Historical',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },
          {
            title: 'Musical',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Noir',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Melodramas',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Romance',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },
          {
            title: 'Science fiction',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Thriller',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Western',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Pornographic',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        }
      },
      {
        title: 'Trending Now',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/1.jpg',
            duration: '1h 30min',
            views: '2K'
          },
          {
            title: 'Kisi Ka Bhai Kisi Ki Jaan',
            imgSrc: 'src/assets/images/collections/trending/2.jpg',
            duration: '1h 57min',
            views: '1.5K'
          },
          {
            title: 'Suraj Pe Mangal Bhari',
            imgSrc: 'src/assets/images/collections/trending/3.jpg',
            duration: '2h 10min',
            views: '1.8K'
          },
          {
            title: 'Pathan',
            imgSrc: 'src/assets/images/collections/trending/4.jpg',
            duration: '2h 20min',
            views: '3K'
          },
          {
            title: 'Ant-Man',
            imgSrc: 'src/assets/images/collections/trending/5.jpg',
            duration: '1h 42min',
            views: '5K'
          },

          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/1.jpg',
            duration: '1h 30min',
            views: '2K'
          },
          {
            title: 'Kisi Ka Bhai Kisi Ki Jaan',
            imgSrc: 'src/assets/images/collections/trending/2.jpg',
            duration: '1h 57min',
            views: '1.5K'
          },
          {
            title: 'Suraj Pe Mangal Bhari',
            imgSrc: 'src/assets/images/collections/trending/3.jpg',
            duration: '2h 10min',
            views: '1.8K'
          },
          {
            title: 'Pathan',
            imgSrc: 'src/assets/images/collections/trending/4.jpg',
            duration: '2h 20min',
            views: '3K'
          },
          {
            title: 'Ant-Man',
            imgSrc: 'src/assets/images/collections/trending/5.jpg',
            duration: '1h 42min',
            views: '5K'
          },

          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/1.jpg',
            duration: '1h 30min',
            views: '2K'
          },
          {
            title: 'Kisi Ka Bhai Kisi Ki Jaan',
            imgSrc: 'src/assets/images/collections/trending/2.jpg',
            duration: '1h 57min',
            views: '1.5K'
          },
          {
            title: 'Suraj Pe Mangal Bhari',
            imgSrc: 'src/assets/images/collections/trending/3.jpg',
            duration: '2h 10min',
            views: '1.8K'
          },
          {
            title: 'Pathan',
            imgSrc: 'src/assets/images/collections/trending/4.jpg',
            duration: '2h 20min',
            views: '3K'
          },
          {
            title: 'Ant-Man',
            imgSrc: 'src/assets/images/collections/trending/5.jpg',
            duration: '1h 42min',
            views: '5K'
          },

          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/1.jpg',
            duration: '1h 30min',
            views: '2K'
          },
          {
            title: 'Kisi Ka Bhai Kisi Ki Jaan',
            imgSrc: 'src/assets/images/collections/trending/2.jpg',
            duration: '1h 57min',
            views: '1.5K'
          },
          {
            title: 'Suraj Pe Mangal Bhari',
            imgSrc: 'src/assets/images/collections/trending/3.jpg',
            duration: '2h 10min',
            views: '1.8K'
          },
          {
            title: 'Pathan',
            imgSrc: 'src/assets/images/collections/trending/4.jpg',
            duration: '2h 20min',
            views: '3K'
          },
          {
            title: 'Ant-Man',
            imgSrc: 'src/assets/images/collections/trending/5.jpg',
            duration: '1h 42min',
            views: '5K'
          }
        ]
      },
      {
        title: 'New Releases',
        movieItems: [
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/new-releases/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Muhojir',
            imgSrc: 'src/assets/images/collections/new-releases/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22'
            }
          },
          {
            title: 'Sin City',
            imgSrc: 'src/assets/images/collections/new-releases/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13'
            }
          },
          {
            title: 'The Tomorrow War',
            imgSrc: 'src/assets/images/collections/new-releases/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19'
            }
          },
          {
            title: 'Misfire',
            imgSrc: 'src/assets/images/collections/new-releases/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11'
            }
          },

          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/new-releases/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Muhojir',
            imgSrc: 'src/assets/images/collections/new-releases/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22'
            }
          },
          {
            title: 'Sin City',
            imgSrc: 'src/assets/images/collections/new-releases/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13'
            }
          },
          {
            title: 'The Tomorrow War',
            imgSrc: 'src/assets/images/collections/new-releases/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19'
            }
          },
          {
            title: 'Misfire',
            imgSrc: 'src/assets/images/collections/new-releases/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11'
            }
          },

          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/new-releases/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Muhojir',
            imgSrc: 'src/assets/images/collections/new-releases/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22'
            }
          },
          {
            title: 'Sin City',
            imgSrc: 'src/assets/images/collections/new-releases/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13'
            }
          },
          {
            title: 'The Tomorrow War',
            imgSrc: 'src/assets/images/collections/new-releases/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19'
            }
          },
          {
            title: 'Misfire',
            imgSrc: 'src/assets/images/collections/new-releases/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11'
            }
          },

          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/new-releases/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14'
            }
          },
          {
            title: 'Muhojir',
            imgSrc: 'src/assets/images/collections/new-releases/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22'
            }
          },
          {
            title: 'Sin City',
            imgSrc: 'src/assets/images/collections/new-releases/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13'
            }
          },
          {
            title: 'The Tomorrow War',
            imgSrc: 'src/assets/images/collections/new-releases/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19'
            }
          },
          {
            title: 'Misfire',
            imgSrc: 'src/assets/images/collections/new-releases/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11'
            }
          },
        ]
      },
      {
        title: 'Mast - Watch Movies',
        movieItems: [
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '17K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/3.jpg',
            duration: '2h 42min',
            rating: {
              value: 4.5,
              label: '24K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '17.8K'
            }
          },

          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '17K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/3.jpg',
            duration: '2h 42min',
            rating: {
              value: 4.5,
              label: '24K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '17.8K'
            }
          },

          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '17K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/3.jpg',
            duration: '2h 42min',
            rating: {
              value: 4.5,
              label: '24K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '17.8K'
            }
          },

          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '17K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/3.jpg',
            duration: '2h 42min',
            rating: {
              value: 4.5,
              label: '24K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '17.8K'
            }
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        }
      }
    ]
  },
  {
    title: 'Shows',
    items: [
      {
        title: `Our Genres 2`,
        categoryItems
      },
      {
        title: `Popular Top 10 In Genres`,
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },
          {
            title: 'Horror',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/horror/1.jpg',
              '/src/assets/images/categories/horror/2.jpg',
              '/src/assets/images/categories/horror/3.jpg',
              '/src/assets/images/categories/horror/4.jpg',
            ]
          },
          {
            title: 'Animated',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Fantasy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Historical',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },
          {
            title: 'Musical',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Noir',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Melodramas',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Romance',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },
          {
            title: 'Science fiction',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Thriller',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Western',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Pornographic',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        }
      },
      {
        title: 'Trending Shows Now',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/2.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/3.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/4.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },

          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/2.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/3.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/4.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },

          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/2.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/3.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/4.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },

          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/2.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/3.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/4.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        }
      },
      {
        title: 'New Released Shows',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/2.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/3.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/4.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },

          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/2.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/3.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/4.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },

          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/2.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/3.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/4.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },

          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/2.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/3.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
          {
            title: 'Morbius',
            imgSrc: 'src/assets/images/collections/trending/4.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show'
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        }
      },
      {
        title: 'Mast - Watch Shows',
        movieItems: [
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '17K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/3.jpg',
            duration: '2h 42min',
            rating: {
              value: 4.5,
              label: '24K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '17.8K'
            }
          },

          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '17K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/3.jpg',
            duration: '2h 42min',
            rating: {
              value: 4.5,
              label: '24K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '17.8K'
            }
          },

          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '17K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/3.jpg',
            duration: '2h 42min',
            rating: {
              value: 4.5,
              label: '24K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '17.8K'
            }
          },

          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '17K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/3.jpg',
            duration: '2h 42min',
            rating: {
              value: 4.5,
              label: '24K'
            }
          },
          {
            title: 'Adipurush',
            imgSrc: 'src/assets/images/collections/mast-watch/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '17.8K'
            }
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        }
      }
    ]
  }
]

export default collectionGroups