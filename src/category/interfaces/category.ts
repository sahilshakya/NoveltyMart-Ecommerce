export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface AdaptedCategory extends Category {
  formattedName: string;
}
