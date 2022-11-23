import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { useNavigate } from "react-router-dom";


//! Bu icons datalarını menümüzde göstermek için oluşturduk. bu şekilde daha değiştirmesi kolay oldu.
const icons = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    url: "/stock/",
  },
  {
    title: "Purchase",
    icon: <ShoppingCartIcon />,
    url: "/stock/purchases/",
  },
  {
    title: "Sales",
    icon: <AttachMoneyIcon />,
    url: "/stock/sales/",
  },
  {
    title: "Firms",
    icon: <StoreIcon />,
    url: "/stock/firms/",
  },
  {
    title: "Brands",
    icon: <StarsIcon />,
    url: "/stock/brands/",
  },
  {
    title: "Products",
    icon: <InventoryIcon />,
    url: "/stock/products/",
  },
  {
    title: "Admin Panel",
    icon: <SupervisorAccountIcon />,
    url: "https://10001.fullstack.clarusway.com/admin",
  },
];

const MenuListItems = () => {
  const navigate = useNavigate();
  
  
  
  
  
  return (
    //? Bu componenti yaptık çünkü yeni bir menü ekleme veya cıkarma kolay olması için
    <div>
      <List>
        {icons?.map((item, index) => (
          <ListItem key={index} disablePadding>
            {/* //Burada adresler dahili olduğu için navigate ile gönderebiliyoruz. */}
            <ListItemButton onClick={() => navigate(item.url)}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
            {/* //!Burada harici bir link olursa navigate ile yönlendirme yapamayız bu yüden bir koşul yapmalıyız.Yada asağıdaki butonun bir to property si var onu kullanırız.Koşulu ise inculudes ile yapabiliriz. */}
            {/* <ListItemButton to={item.url}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton> */}

          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
