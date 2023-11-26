type MediaType = "facebook_url" | "twitter_url" | "instagram_url" | "pintrest_url"
type SocialMediaProps = Record<MediaType, string>

export type UserProps = {
    id?: string;
    email: string;
    firstName: string;
    lastName: string;
    password?: string,
}

export type StudentProps = {
    id?: number;
    email: string;
    firstName: string;
    lastName: string;
    course: string,
}

export type StaffProps = {
    id?: number;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: number,
    salary: number,
    department: string,
}

export type API_ERROR = { status: string; message: string };