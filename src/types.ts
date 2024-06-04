import { type Command, type ParseOptions } from 'commander';

interface CLICommand extends Command {
}

interface CLILogger {
    error: LogHandler;
    warn: LogHandler;
    info: LogHandler;
    success: LogHandler;
    log: LogHandler;
}

interface IAutoI18nCLI {
    logger: CLILogger;
    program: CLICommand;
    run(args: Parameters<CLICommand['parseOptions']>[0], parseOptions: ParseOptions): Promise<void>;
}

type LogHandler = (value: any) => void;

export {
    IAutoI18nCLI,
    CLICommand,
    CLILogger
}