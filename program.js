process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
    const input = process.stdin.read();
    if(input !== null) {
        const instruction = input.trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/computername':
                process.stdout.write(process.env.COMPUTERNAME + '\n');
                break;
            case '/username':
                let name = process.env.USER || process.env.USERNAME;
                process.stdout.write(name + '\n');
                break;
            case '/lang':
                process.stdout.write(process.env.LANG + '\n');
                break;
            case '/node':
                process.stdout.write(process.versions.node + '\n');
                break;
            default:
                process.stderr.write('Wrong instruction!\n'); 
                break;
        }
    }
});