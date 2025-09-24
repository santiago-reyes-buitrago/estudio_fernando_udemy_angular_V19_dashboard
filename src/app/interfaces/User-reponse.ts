export interface UserReponse {
    data:    Data;
    support: Support;
}

export interface Data {
    last_name:  string;
    id:         number;
    avatar:     string;
    first_name: string;
    email:      string;
}

export interface Support {
    text: string;
    url:  string;
}
