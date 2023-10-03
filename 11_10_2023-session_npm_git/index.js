import chalk from 'chalk';
import { input } from '@inquirer/prompts';

console.log(chalk.red('Hello world!'));
const answer = input({ message: 'Enter your name' });

console.log(answer);
