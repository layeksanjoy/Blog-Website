const getCategories = "http://localhost:3001/categories";
const getPosts = "http://localhost:3001/posts";



export async function getPostsAPI() {
  try {
    const response = await fetch(getPosts, {
      headers: { Authorization: "whatever-you-want" }
    });
    const Posts = await response.json();
    //console.log("API",Posts)
    return Posts;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategoriesAPI() {
  try {
    const response = await fetch(getCategories, {
      headers: { Authorization: "whatever-you-want" }
    });
    const Categories = await response.json();
    //console.log("categories", Categories);
    return Categories;
  } catch (error) {
    console.log(error);
  }
}


export async function getCommentsAPI(id) {
  try {
    const response = await fetch( `http://localhost:3001/posts/${id}/comments`, {
      headers: { Authorization: "whatever-you-want" }
    });
    const Comments = await response.json();
    return Comments;
  } catch (error) {
    console.log(error);
  }
}
// export async function getCommentsAPI(id){
//   try{
//     const response = await fetch(
//       `http://localhost:3001/posts/${id}/comments`, {
//       headers: { Authorization: "whatever-you-want" }
//     });
//       const Comments = await response.json();
//       console.log("Commemts",Comments)
//       return Comments;
//     }catch(e){
//       console.log(e)
//     }
// }
