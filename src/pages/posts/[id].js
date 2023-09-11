export const getStaticPaths = async ()=>{

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data =await res .json();
    const paths = data.map(info =>{
        return {
            params :{id :info.id.toString()}
        }


    })
    return {

       paths , 
       fallback:false
    }


}
export async function getStaticProps(context){
    const id =context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
  
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments/`
      );
      const comment = await response.json();
    return{
      props: 
        {post:data,
        comment}
      
    }
  }
const Detail =({post,comment})=>{
    return (
        <>
            <div className="flex flex-col min-h-screen  h-100 bg-gradient-to-l from-purple-600/[0.5] to-white-600 justify-center  p-10">
        
        <h1 className="text-lg">Post</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    <br/>
   
            <h2>Comments:</h2>
            <br/>
            <ul>
                {comment.map((com) =>{
                    
                     return(
                    <li key={com.id}>
                        <h1>Email: {com.email}  </h1>

                        <p> Name: {com.name}  </p>
                        <p>Body: {com.body} </p>
                        <br/>
                        </li>
                     );    
                })}
            </ul>
            </div>
    </>
    )
}
export default Detail;