import fs from 'node:fs';

export class DiskIO {
    private LOCKED_SIZE: number;
    private FREE_SIZE: number;
    private USED_SIZE: number;
    private PATH: string;
    // private Information;
    
    // public get information() {
        // return structuredClone(this.Information);
    // };

    constructor(path: string, size: number) {
        console.log('DiskIO class');
        // Check if the path exists
        if (!fs.existsSync(path)) {
            throw new Error('The path does not exist');
        }
        // Check if the path is a valid directory
        const isDirectory = fs.statSync(path).isDirectory();
        if (!isDirectory) {
            throw new Error('The path is not a directory');
        }
        // Get mount point
        const mountPoint = fs.realpathSync(path);
        // Get free and used space
        const freeSpace = fs.statSync(mountPoint).blocks * fs.statSync(mountPoint).size;
        const usedSpace = fs.statSync(mountPoint).blocks * fs.statSync(mountPoint).size - freeSpace;
        this.FREE_SIZE = freeSpace;
        this.USED_SIZE = usedSpace;
        this.PATH = path;
        this.LOCKED_SIZE = size;
    }
}