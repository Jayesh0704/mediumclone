
import Header from '../components/Header'
import Head from 'next/head';
import { sanityClient,urlFor } from '../sanity';
import { Post } from '../typings';
interface Props{
  posts: [Post];
}
export default function  Home({posts}:Props){
  console.log(posts);
  
  return (
    <div className='max-w-7xl mx-auto'>
  <Header />
  <div className='flex items-center bg-yellow-400 border-y border-black p-10 lg:p-0'>
    <div className='px-10 space-y-5'>
      <h1 className='text-6xl max-w-xl font-serif'>
        <span className='underlined decoration-black decoration-4'>Medium</span> is a place to write, read and connect</h1>
      <h2>It's easy and free to post your thinking on any topic and connect with millions of readers</h2>
    </div>
     <img src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="Medium" className='hidden md:inline-flex h-32 lg:h-full'/>
  </div>
  </div>
  )
}

 export const getServerSideProps = async ()=>{
  const query=`*[_type=="post"]{
    _id,
   title,
  author->{
           name,
           image
 },
 description,
 mainImage,
 slug
 }`;
 const posts =await sanityClient.fetch(query);  

 return{
  props:{
    posts,
  }
 }
};
   