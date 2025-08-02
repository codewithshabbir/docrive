export interface MenuItem {
  name: string;
  link: string;
  dropdown?: MenuItem[];
}