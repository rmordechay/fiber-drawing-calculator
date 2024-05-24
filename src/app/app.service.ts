import {Injectable} from '@angular/core';

export interface Crystal {
    radius: number;
    lowerSpeed: number;
    upperSpeed: number;
    crystalRadius: number;
}

@Injectable({
    providedIn: 'root'
})
export class AppService {

    /**
     *
     */
    setItem(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     *
     */
    getItem(key: string): Crystal {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    /**
     *
     */
    removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    /**
     *
     */
    getAllRows() : {[key: string]: Crystal} {
        const values: { [key: string]: any } = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key === null) continue;
            values[key] = this.getItem(key)
        }
        return values;
    }

    /**
     *
     */
    getKeyId(radius: number, lowerSpeed: number, upperSpeed: number): string {
        return `${radius}${lowerSpeed}${upperSpeed}`
    }
}
