
import Image from "next/image";
import Layout from "@/components/Layout";


export default function Home() {
  return (
    <Layout>
      <div className="grow conteiner flex flex-row justify-around  items-center">
        <div className="w-full flex flex-row justify-around items-start">
          <div className="left flex flex-col justify-center items-center">
            <Image
              className="shadow-2xl"
              src="https://api.backlinko.com/app/uploads/2019/12/the-classic-list-post-768x1290.webp"
              alt="blog"
              width={300}
              height={800}
            />
          </div>
          <div className="center flex flex-col justify-between items-center ">
            <div className=" flex flex-col justify-center items-center ">
              <div className="m-3 p-3 flex flex-row justify-center items-center text-3xl ">
                <div className="m-3 w-16 h-0 border border-black">

                </div>
                <div className="uppercase">
                  The anatomy of a
                </div>
                <div className="m-3 w-16 h-0 border border-black">

                </div>
              </div>
              <h1 className="m-3 p-6 text-5xl font-medium bg-gray-600 text-white shadow-[10px_10px_0_0_rgba(0,0,0,0.3)]">
                  Perfect Blog Post
              </h1>
            </div>
            
            <Image
              className="shadow-2xl m-8 rounded-lg"
              src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg"
              alt="blog"
              width={300}
              height={200}
            />
            
          </div>
          <div className="right flex flex-col justify-center items-center">
            <Image
              className="shadow-2xl"
              src="https://static.semrush.com/blog/uploads/media/76/d1/76d19295e32fbcffb761aa222c7e491b/original.png"
              alt="blog"
              width={300}
              height={800}
            />
          </div>
        </div>
        
      </div>
    </Layout>
  );
}
