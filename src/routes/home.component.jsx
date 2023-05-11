import CategoryItem from "../components/category-item/category-item.component";

const Home = () => {    // Home component

  const categories = [  // array of objects
    { 
    id: 1,  
    title: 'Web',
    imageUrl: 'https://www.crescibit.com/images/home/infinity.png'
    },
    {
    id: 2,  
    title: 'Mobile',
    imageUrl: 'https://www.crescibit.com/images/home/infinity.png'
    },  
    {
    id: 3,  
    title: 'Design',
    imageUrl: 'https://maqe-com-4-media-uploads.s3.ap-southeast-1.amazonaws.com/content/uploads/2020/04/07172814/IN_DEsignthinking_Design-Thinking-2-2048x1140.png'
    },  
    { 
    id: 4,  
    title: 'DevOps',
    imageUrl: 'https://marvel-b1-cdn.bc0a.com/f00000000236551/dt-cdn.net/wp-content/uploads/2021/07/13429_ILL_DevOpsLoop.png'
    },
    { 

    id: 5,
    title: 'QA',
    imageUrl: 'https://jakho.rs/wp-content/uploads/2018/01/circle.png'
    }
  ];

  return (
    <main className="categories__wrapper">
    {categories.map(({title, id, imageUrl}) => ( // map through the array of objects
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
    ))}
    </main>
  );
}

export default Home;