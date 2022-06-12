import { IMenu } from "../../interfaces/menu";

interface IMenuSeparatedByGroup {
  [key: string]: IMenu[];
}

export function separateGroupsFromMenu(MenuRestaurant: IMenu[]) {
  const menuSeparatedByGroup: IMenuSeparatedByGroup = {};

  MenuRestaurant?.forEach((product) => {
    const nameOfGroup = product.group.toLocaleLowerCase();

    if (!menuSeparatedByGroup[nameOfGroup]) {
      menuSeparatedByGroup[nameOfGroup] = [];
    }

    menuSeparatedByGroup[nameOfGroup].push(product);
  });

  const nameOfGroups = Object.keys(menuSeparatedByGroup);
  const arrayOfProducts = Object.values(menuSeparatedByGroup);

  return { nameOfGroups, arrayOfProducts };
}
