export const Post = {
  success: true,
  error: null,
  data: {
    posts: [
      {
        location: "[On Request]",
        willDeliver: false,
        messages: [],
        active: true,
        _id: "5e8d1a02829c8e0017c20b58",
        author: {
          _id: "5e8d1a02829c8e0017c20b55",
          username: "joe1234",
        },
        title: "Practically new Stradivarius",
        description:
          "I've really only used this three or four times.  I thought it would be a good purchase, shows what I know.",
        price: "$14.3 million",
        createdAt: "2020-04-08T00:25:38.106Z",
        updatedAt: "2020-04-08T00:25:38.264Z",
        __v: 0,
        isAuthor: false,
      },
      {
        location: "[On Request]",
        willDeliver: true,
        messages: [],
        active: true,
        _id: "5e8d1a02829c8e0017c20b59",
        author: {
          _id: "5e8d1a02829c8e0017c20b56",
          username: "jane1234",
        },
        title: "Golden Retriever puppies",
        description:
          "Not looking for any money, just want to find a good home for these four beautiful pups.",
        price: "free",
        createdAt: "2020-04-08T00:25:38.167Z",
        updatedAt: "2020-04-08T00:25:38.268Z",
        __v: 0,
        isAuthor: false,
      },
      {
        location: "Downtown Los Angeles, CA",
        willDeliver: false,
        messages: [],
        active: true,
        _id: "5e8d1a02829c8e0017c20b5a",
        author: {
          _id: "5e8d1a02829c8e0017c20b56",
          username: "jane1234",
        },
        title: "Chest Freezer",
        description:
          "This freezer is nearly 50 years old, but still works perfectly.  It is quite heavy, so I will need some help moving it.",
        price: "$50",
        createdAt: "2020-04-08T00:25:38.168Z",
        updatedAt: "2020-04-08T00:25:38.168Z",
        __v: 0,
        isAuthor: false,
      },
      {
        location: "Ames, IA",
        willDeliver: true,
        messages: [],
        active: true,
        _id: "5e8d1a02829c8e0017c20b5b",
        author: {
          _id: "5e8d1a02829c8e0017c20b57",
          username: "caesar1234",
        },
        title: "NordicTrack Freestrider Elliptical Trainer",
        description: "To be honest, it is more amazing than my resolve.",
        price: "$1400, OBO",
        createdAt: "2020-04-08T00:25:38.186Z",
        updatedAt: "2020-04-08T00:25:38.273Z",
        __v: 0,
        isAuthor: false,
      },
    ],
  },
};
export const MessagesData = {
  success: true,
  error: null,
  data: {
    message: {
      _id: "5e8d1fd747b6ce0017600594",
      content: "I really love this item.  Can I have it?",
      post: "5e8d1f2539e7a70017a7c965",
      fromUser: "5e8d1f2539e7a70017a7c961",
      createdAt: "2020-04-08T00:50:31.402Z",
      updatedAt: "2020-04-08T00:50:31.402Z",
      __v: 0,
    },
  },
};
export const MyData = {
  posts: [
    {
      location: "[On Request]",
      willDeliver: false,
      messages: [
        {
          _id: "5e8d1f2539e7a70017a7c968",
          fromUser: {
            _id: "5e8d1f2539e7a70017a7c962",
            username: "jane1234",
          },
          content: "I am very much in the market for a fine violin.",
        },
      ],
      active: true,
      _id: "5e8d1f2539e7a70017a7c964",
      author: "5e8d1f2539e7a70017a7c961",
      title: "Practically new Stradivarius",
      description:
        "I've really only used this three or four times.  I thought it would be a good purchase, shows what I know.",
      price: "$14.3 million",
      createdAt: "2020-04-08T00:47:33.794Z",
      updatedAt: "2020-04-08T00:47:33.865Z",
      __v: 0,
    },
    {
      location: "Bronx, NY",
      willDeliver: false,
      messages: [],
      active: true,
      _id: "5e8d1f8647b6ce0017600593",
      title: "Schwinn Bicycle",
      price: "3.88",
      description: "This is a 19 speed bicycle, barely used.",
      author: "5e8d1f2539e7a70017a7c961",
      createdAt: "2020-04-08T00:49:10.248Z",
      updatedAt: "2020-04-08T00:49:10.248Z",
      __v: 0,
    },
  ],
  messages: [
    {
      _id: "5e8d1f2539e7a70017a7c968",
      post: {
        _id: "5e8d1f2539e7a70017a7c964",
        title: "Practically new Stradivarius",
      },
      fromUser: {
        _id: "5e8d1f2539e7a70017a7c962",
        username: "jane1234",
      },
      content: "I am very much in the market for a fine violin.",
    },
    {
      _id: "5e8d1f2539e7a70017a7c969",
      post: {
        _id: "5e8d1f2539e7a70017a7c965",
        title: "Golden Retriever puppies",
      },
      fromUser: {
        _id: "5e8d1f2539e7a70017a7c961",
        username: "joe1234",
      },
      content: "OMG Puppies... I'll take them all!",
    },
    {
      _id: "5e8d1fd747b6ce0017600594",
      content: "I really love this item.  Can I have it?",
      post: {
        _id: "5e8d1f2539e7a70017a7c965",
        title: "Golden Retriever puppies",
      },
      fromUser: {
        _id: "5e8d1f2539e7a70017a7c961",
        username: "joe1234",
      },
    },
  ],
  _id: "5e8d1f2539e7a70017a7c961",
  username: "joe1234",
  __v: 0,
};
