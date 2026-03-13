import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-slate-800/50 text-slate-300 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Button
            asChild
            size="sm"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium"
          >
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
