import fs from 'node:fs/promises';

export class DiskIO {
    // private Information;
    
    public get information() {
        return structuredClone(this.Information);
    };

    constructor(path: string, size: number) {
        console.log('DiskIO class');
        // Get information about the disk
        // this.Information = require('diskinfo')(path);
    }
}