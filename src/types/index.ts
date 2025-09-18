export interface User {
    id: string;
    username: string;
    password: string;
}

export interface Image {
    id: string;
    userId: string;
    url: string;
    createdAt: Date;
}