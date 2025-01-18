import menu00Projects from './menu00.js';
import menu01Projects from './menu01.js';
import menu02Projects from './menu02.js';
import menu03Projects from './menu03.js';
import menu04Projects from './menu04.js';
import menu05Projects from './menu05.js';

const allProjects = [
    ...menu00Projects,
    ...menu01Projects,
    ...menu02Projects,
    ...menu03Projects,
    ...menu04Projects,
    ...menu05Projects
];

// Exporting the 'projects' variable
export const projects = allProjects;

console.log(projects);