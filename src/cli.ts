import { type IAutoI18nCLI, type CLICommand, type CLILogger } from './types';
import { program, type ParseOptions } from 'commander';
import chalk from 'chalk';

class AutoI18nCli implements IAutoI18nCLI {
    program: CLICommand;
    logger: CLILogger;
    constructor() {
        this.program = program;
        this.logger = this.getLogger();
    }

    async run(args: Parameters<CLICommand['parseOptions']>[0], parseOptions: ParseOptions) {
        console.log(args);
    }

    getLogger(): CLILogger {
        return {
            error: (val) => console.error(`[auto-i18n] ${chalk.red(val)}`),
            warn: (val) => console.warn(`[auto-i18n] ${chalk.yellow(val)}`),
            info: (val) => console.info(`[auto-i18n] ${chalk.cyan(val)}`),
            success: (val) => console.log(`[auto-i18n] ${chalk.green(val)}`),
            log: (val) => console.log(`[auto-i18n] ${val}`),
        }
    }
}

export default AutoI18nCli