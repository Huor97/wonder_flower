import React, { useState, useEffect } from 'react';
import Articl from './Articl/Articl';
import axios from 'axios';
import Categories from '../Header/HeaderComponent/Categories';
import Bandeau from './Articl/Bandeau';
import Footer from '../Footer/Footer';

const HomePage = () => {
  // affichage des données
  const [posts, setPosts] = useState([]);
  // la chargement des données avant affichage
  const [loading, setLoading] = useState(true);

  // récouperer des données après api
  const fetchPosts = async () => {
    const responsePosts = await axios.get(
      `https://wonderouman.vercel.app/products`
    );
    setPosts(responsePosts.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const [activeCategory, setActiveCategory] = useState('');
  const postWithCategories = posts.find((post) => post.category);

  console.log({ activeCategory });
  return (
    <>
      <Bandeau />

      <div className="absolute top-[100vh] left-0 right-0 bg-gray-300">
        <Categories
          categories={
            postWithCategories ? Object.keys(postWithCategories.category) : []
          }
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
        {/* {console.log(Object.keys(categories[0]))} */}
        {loading ? (
          <div>Data is loading</div>
        ) : (
          <div className="w-full mt-6 pl-[130px] pr-[130px] justify-items-center  grid grid-cols-3 gap-x-24 ">
            {posts
              // .filter(
              //   (post) => !activeCategory || post?.category?.[activeCategory]
              // )
              .filter((post) => {
                // si pas d active category
                if (activeCategory === '') {
                  return true;
                }
                // si il y a une category set
                if (activeCategory) {
                  // si il y cette category set ds le post et elle a true
                  if (post?.category?.[activeCategory] === true) {
                    return true;
                  }
                }
                // sinon ca veut dire que on a pas a afficher cet item
                return false;
              })
              .map((post, index) => (
                <Articl
                  key={index}
                  id={post._id}
                  img={post.images[0]}
                  nom={post.name}
                  prix={post.price + '€'}
                />
              ))}
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
