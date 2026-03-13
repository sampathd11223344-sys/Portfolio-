export const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                I'm a full-stack developer and creative video editor with a passion for building 
                exceptional digital experiences. With expertise in modern web technologies and 
                a keen eye for visual storytelling, I bring ideas to life through code and creativity.
              </p>
              <p>
                My journey in tech started with curiosity and has evolved into a career dedicated 
                to crafting clean, performant, and user-friendly applications. I believe in the 
                power of combining technical excellence with creative vision.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new video editing techniques, 
                contributing to open-source projects, or staying updated with the latest 
                developments in the tech world.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl transform rotate-6" />
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-slate-900/50 rounded-xl">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                  <div className="text-slate-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-slate-400 text-sm">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-xl">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">30+</div>
                  <div className="text-slate-400 text-sm">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                  <div className="text-slate-400 text-sm">Video Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};