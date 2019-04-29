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
                process.stdout.write(process.env.COMPUTERNAME);
                break;
            case '/username':
                process.stdout.write(process.env.USERNAME);
                break;
            case '/lang':
                process.stdout.write(process.env.LANG);
                break;
            case '/node':
                process.stdout.write(process.versions.node);
                break;
            default:
                process.stderr.write('Wrong instruction!\n'); 
                break;
        }
    }
});