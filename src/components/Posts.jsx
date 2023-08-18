import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Base_URL = "2308-FTB-MT-WEB-PT";
const full_url = `https://strangers-things.herokuapp.com/api/${Base_URL}/posts`;

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(full_url);
        const result = await response.json();
        // console.log(result)
        setPosts(result.data.posts);
        //*modifies the posts State data from the API by adding a isHidden field to each post which will be toggled between true/fale for visibility of each table row*/
        return posts.map((post) => {
          const {
            description,
            location,
            willDeliver,
            title,
            price,
            message,
            createdAt,
            author,
            isHidden,
          } = post;
        });
      } catch (err) {
        console.error(err);
      }
    }
    getPosts();
  }, []);

  /** function that iterates over each post of the Posts state on more/less button click; if selected id does not equal the id of the current map iteration,
   * then function will iterate to next post.  If _id = the passed in id, isHidden will be switch to the oppisite of its current value. Creating the toggle affect
   */
  const seeNoMoreNoLess = (id) => {
    const newPosts = posts.map((post) => {
      if (post._id !== id) {
        return post;
      }
      const isHiddenValue = post.isHidden;
      return { ...post, isHidden: !isHiddenValue };
    });

    setPosts(newPosts);
  };

  /**items of the post that will be displayed/hidden when button is toggled*/
  const DetailsElement = (post) => {
    return (
      <table>
        <tbody>
          <tr>
            <td>Description: {post.description}</td>
            <td>location: {post.location}</td>
            <td>Will Deliver:{post.willDeliver}</td>
            <td>Message:{post.message}</td>
            <td>Created At: {post.createdAt}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <>
      <table>
        <tbody>
          {posts &&
            posts.map((post) => {
              return (
                <tr key={post._id}>
                  {/**items of the post that are always diplayed*/}
                  <td>User: {post.author.username}</td>
                  <td>Title:{post.title}</td>
                  <td>Price: {post.price}</td>
                  {/** Using a tested table and ternary to decide if the nested table DetailsElement is displayed depending on the isHidden field of the post object.   */}
                  <td>{post.isHidden ? DetailsElement(post) : null}</td>
                  <td>
                    <button
                      onClick={() => {
                        {
                          /** function to modify the ishidden field of the Posts state depending on passed in _id  */
                        }
                        post && seeNoMoreNoLess(post._id);
                      }}
                    >
                      {/** using ternary to change the button label depending on if details is open or closed. */}
                      {showDetails ? "Less" : "More"}
                    </button>
                  </td>
                  <td>
                    {/** option to redirect to selected post detail page.  Link has prop to sent State along with the redirect.
                     * This State will be used in the detail page
                     */}
                    <Link to="postdetailpage" state={{ post: post }}>
                      Details Page
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
