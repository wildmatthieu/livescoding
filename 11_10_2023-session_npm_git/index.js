import chalk from 'chalk';
import { input } from '@inquirer/prompts';

console.log(chalk.green('Hello World!'));
const answer = await input({ message: 'Entré votre prainom' });

console.log(answer);
