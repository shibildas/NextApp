import Feed from "@components/Feed"
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover and Share <br className="max-md:hidden" />
         <span className="orange_gradient text-center">AI Powered Prompts</span></h1>
         <p className="desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cupiditate est voluptas omnis accusantium molestiae facilis repellat dolores nihil. Cum quisquam magnam illo laborum aliquam harum nam corporis facere optio.</p>
        <Feed/>
        </section>
  )
}

export default Home