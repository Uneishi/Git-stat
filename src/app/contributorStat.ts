export class contributorStats {
    total: number | undefined;
    weeks: weekActions[] | undefined;
    author!: author;
}
 
export class weekActions {
    w:number| undefined;
    a:number| undefined;
    d:number| undefined;
    c:number| undefined;
}

export class author {
    login!:string;
    avatar_url!:string;
    type!:string;
    html_url!:string;
    received_events_url!:string;
}