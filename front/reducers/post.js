export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "정은여신"
      },
      content: "첫 번째 게시글 #해시태그 #후하",
      Images: [
        {
          src:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.123rf.com%2Fphoto_79503695_%25EC%259A%25B0%25EC%25A3%25BC%25EC%259D%2598-%25EC%2584%25B1%25EC%259A%25B4%25EA%25B3%25BC-%25EC%259D%2580%25ED%2595%2598.html&psig=AOvVaw0xpBEOEj-zj7I68wF7EK8V&ust=1592235217809000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCiqsjQgeoCFQAAAAAdAAAAABAO"
        }
      ],
      Comments: [
        {
          User: {
            nickname: "여신정은"
          },
          content: "우와 좋아요!"
        },
        {
          User: {
            nickname: "지간짱"
          },
          content: "우와 예뻐여"
        }
      ]
    }
  ],
  imagePaths: [],
  postAdded: false
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "여신정은"
  },
  Images: [],
  Comments: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts], // 앞에 추가해야 제일 위에 올라감
        postAdded: true
      };
    default:
      return state;
  }
};

export default reducer;
