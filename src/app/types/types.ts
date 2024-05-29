export type AddLeadsFormData = {
    lead_type: 'Hot' | 'Cold';
    title: 'Mr.' | 'Ms.' | 'Miss.';
    first_name: string;
    last_name: string;
    contact_number:number;
    email_id:string;
    requirement:string
};