interface Badge {
    type: string;
    expiryDate?: string;
}

interface Author {
    name: string;
    githubUsername: string;
}

export type Meta = {
    name: string;
    linkText?: string,
    date?: string,
    authors?: Author[],
    badge?: Badge;
}