import profileReducer, {addPost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, post: "My first post", likesCount: 5},
        {id: 2, post: "I was doing profile", likesCount: 3},
        {id: 3, post: "I/'a m ok ", likesCount: 7},
        {id: 4, post: "What a wonderful day", likesCount: 1},
        {id: 5, post: "I finished my project", likesCount: 2},
    ]
};

it("message of new post should be correct", () => {
    let action = addPost("correct");
    let newState = profileReducer(state, action);
    expect(newState.posts[5].post).toBe("correct");
});
