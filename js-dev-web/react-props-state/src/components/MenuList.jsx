import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  return (
    <>
      {
        foodItems.map((item, index) => {
            return (
                <MenuItem key={index} {...item} />
            );
        })
      }
    </>
  );
}

export default MenuList;
