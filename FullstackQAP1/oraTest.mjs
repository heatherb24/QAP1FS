// ora is a package that provides a way to create loading spinners in the terminal
// it can help indicate that a task is loading

import ora from 'ora';

const spinner = ora('Loading...');
spinner.start();
setTimeout(() => {
    spinner.succeed('task completed successfully');
}, 5000);