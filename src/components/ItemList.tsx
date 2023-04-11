import { ItemListlayout, ItemList } from '../style/ItemList.styled';

const ItemLists = () => {
  return (
    <ItemListlayout>
      <ItemList>
        <img src="https://palyvoice.com/wp-content/uploads/2022/10/Taylor-Swift-Midnights-e1666897618365.webp" alt="tay" />
        <p>TAYLOR SWIFT</p>
      </ItemList>
      <ItemList>
        <img
          src="https://ca-times.brightspotcdn.com/dims4/default/d46feb4/2147483647/strip/false/crop/2090x2096+0+0/resize/1482x1486!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8c%2F18%2F92342ecb4ef79e308ed83779e4a1%2Fet-harry-styles-2022-19.jpg"
          alt="tay"
        />
        <p>HARRY STYLES</p>
      </ItemList>
      <ItemList>
        <img
          src="https://i.guim.co.uk/img/media/fc3b077685461992e9cb75e51ce995088de338ce/0_67_5175_3105/master/5175.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e174022fbd43673f2119e8ed9ce564ff"
          alt="tay"
        />
        <p>LOUIS TOMLINSON</p>
      </ItemList>
      <ItemList>
        <img
          src="https://akns-images.eonline.com/eol_images/Entire_Site/2023124/rs_1200x1200-230224104934-1200-onedirection.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top"
          alt="tay"
        />
        <p>ONE DIRECTION</p>
      </ItemList>
      <ItemList>
        <img
          src="data:image/jpeg;base64,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"
          alt="tay"
        />
        <p>GIRL IN RED</p>
      </ItemList>
    </ItemListlayout>
  );
};

export default ItemLists;
