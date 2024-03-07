import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa ex
            doloribus odio corporis! Ut at voluptatibus excepturi adipisci,
            repellat quisquam sunt quasi est totam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa ex
            doloribus odio corporis! Ut at voluptatibus excepturi adipisci,
            repellat quisquam sunt quasi est totam!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut neque
            dicta, dolor in corrupti perspiciatis!
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a className="text-4xl text-gray-500" href="tel:+46738123123">
            +46 738 123 123
          </a>
        </div>
      </section>
      
    </>
  );
}
