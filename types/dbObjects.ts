type userType = {
    id:string,
    name:string | undefined,
    email:string,
    image:string | undefined,
    uploadedImages: ImageType[]
}
type ImageType = {
    id: string,
    name: string | undefined,
    image: string,
    userId:string
}
export type { userType, ImageType };