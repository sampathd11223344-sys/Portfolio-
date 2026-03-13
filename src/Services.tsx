import { servicesData } from '../data/servicesData';
import { Laptop, Code, Video, Edit, Palette } from 'lucide-react';

const iconMap = {
  Laptop,
  Code,
  Video,
  Edit,
  Palette,
};

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            What I can do for you
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-400/50 hover:ring-2 hover:ring-cyan-400/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
