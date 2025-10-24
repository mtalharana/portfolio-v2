import HeroImg from "@/assets/images/hero.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Your digital partner — turning ideas into seamless experiences
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="hero illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                {`Hi! I'm Talha Rana, a full-stack developer passionate about crafting modern digital solutions for web, mobile, and beyond.`}
              </p>

              <p className="text-white">
                {`I focus on creating clean, fast, and scalable experiences that help businesses and individuals bring ideas to life. My work bridges design, development, and strategy — ensuring every project delivers impact.`}
              </p>

              <p className="text-white">
                {`As a lifelong learner and problem solver, I embrace new technologies and workflows to stay ahead, providing clients with solutions that are not just functional, but elegant and future-proof.`}
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    {`I’m dedicated to empowering teams and clients alike — sharing knowledge, building smarter solutions, and creating tools that drive real progress.`}
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Talha Rana, Developer & Digital Innovator
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
