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
            "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
        },
        {
          src:
            "https://cdn.pixabay.com/photo/2011/12/14/12/18/space-11099_960_720.jpg"
        },
        {
          src:
            "https://cdn.pixabay.com/photo/2011/12/15/10/06/eagle-nebula-11149_960_720.jpg"
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
  addPostLoading: false,
  addPostDone: false,
  addPostError: false,

  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: false
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = {
  type: ADD_POST_REQUEST,
  data
};

export const addComment = {
  type: ADD_COMMENT_REQUEST,
  data
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
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts], // 앞에 추가해야 제일 위에 올라감
        addPostLoading: false,
        addPostDone: true
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error
      };
    default:
      return state;
  }
};

export default reducer;
