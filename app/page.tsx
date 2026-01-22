import { readFileSync } from 'fs';
import { join } from 'path';
import PortfolioClient from './components/PortfolioClient';

interface Project {
  id: string;
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  blogPost: string;
  tags: string[];
  featured: boolean;
}

function getProjects(): Project[] {
  try {
    const filePath = join(process.cwd(), 'data', 'projects.json');
    const fileContents = readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return data.projects || [];
  } catch (error) {
    console.error('Error reading projects.json:', error);
    return [];
  }
}

export default function Home() {
  const projects = getProjects();

  return <PortfolioClient projects={projects} />;
}
