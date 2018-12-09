import { ObjectOrientedRenderer3 } from "@angular/core/src/render3/interfaces/renderer";

export class User {
    _id: string;
    id: string;
    username: string;
    email: string;
    password: string;
    following: string[];
    follower: string[];
    posts: string[];
    image: string;
    jsonWebToken: string;
}

export class usermodels {
    username: string;
    following: number;
    follower: number;
    posts: number;
}
