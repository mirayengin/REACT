import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useStockCalls from "../hooks/useStockCalls";
import { arrowStyle, btnHoverStyle, flexCenter } from "../styles/globalStyle";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/UpgradeIcon";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottomIcon";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useSortColumn from "../hooks/useSortColumn";
import { MultiSelectBox, MultiSelectBoxItem } from "@tremor/react";
import ProductModal from "../../../stock-app/src/components/modals/ProductModal";

const Firms = () => {
  const { getCategories, getBrands, getProducts } = useStockCalls();
  const { products,brands } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])


  //? Burda products sayfası ilk açıldığında bu bilgiler yüklen,yor.
  useEffect(() => {
    getBrands();
    getCategories();
    getProducts();
  }, []);

  //! sıralama fonk diğer yerlerde kullanmak ve clean code için custom hook a taşıdık o yüzden bu verileri custom hook a göndermek gerekliydi bizde bu dataları normal bir obj olarak gönderdik ve hook un içinde state oluşturduk
  const columnObf = {
    brand: 1,
    name: 1,
    stock: 1,
  };


  //? custom hook u buraya import ettik.
  const { sortedData, handleSort, columns } = useSortColumn(
    products,
    columnObf
  );

  //! bu fonk verilen item brandların içinde varsa true yoksa false döndürür.Bizde zaten trueları istiyoruz.
  const isBrandSelected = (item) => selectedBrands.includes(item.brand) || selectedBrands.length === 0;

  //? bu fonk seçilen markanın ürünlerinin isimlerini alta seçimlerini göstermek için bize döndürür.
  const isProductSelected = (item) => selectedProducts.includes(item.name) || selectedProducts.length === 0;


  //? seçilen markaların ürünlerini almak için yaptık(select inputuna yazdırmak için)
  const filtredProducts = products?.filter((item) => selectedBrands?.inculudes(item.brand)).map((item) => item.name);





  //? Ok iconlarını ters ve düz yapmak için oluşturduk
  // const [toggle, setToggle] = useState({
  //   brand: 1,
  //   name: 1,
  //   stock: 1,
  // });

  // //? Siralanacak local state (sutun verilerinin local state hali)
  //! Bu local state de sıralanan productsları tutmak için yaptık.Redux state ini değiştirmek için dispatch yayınlamak lazım ve bu products ın kullanıldığı her yer render  o yüzden bir kopyasını almış oluyoruz bir nevi.
  // const [sortedProducts, setSortedProducts] = useState(products);
  // console.log(toggle);

  // //! product state'i her guncellendiginde local state'i de guncelle
  // useEffect(() => {
  //   setSortedProducts(products);
  // }, [products]);

  //? Jenerik Sutun siralama fonksiyonu
  // const handleSort = (arg, type) => {
  //   //! Bunu sıralama için kullanıyoruz çünkü ascıı sıralamalarında cıkarma işe yaramamaz
  //   setToggle({ ...toggle, [arg]: toggle[arg] * -1 });
  //   setSortedProducts(
  //     sortedProducts
  //       ?.map((item) => item)
  //       //? a ve b bir itemdır
  //       .sort((a, b) => {
  //         if (type === "date") {
  //           return toggle[arg] * (new Date(a[arg]) - new Date(b[arg]));
  //         } else if (type === "number") {
  //           return toggle[arg] * (a[arg] - b[arg]);
  //         } else {
  //           //? yönünü belirtmek lazım burada sıralamanın
  //           if (toggle[arg] === 1) {
  //             return b[arg] > a[arg] ? 1 : b[arg] < a[arg] ? -1 : 0;
  //           } else {
  //             return a[arg] > b[arg] ? 1 : a[arg] < b[arg] ? -1 : 0;
  //           }
  //         }
  //       })
  //   );
  // };

  // const handleSortNumber = (arg) => {
  //   setToggle({ ...toggle, [arg]: toggle[arg] * -1 });
  // };

  console.log(selectedBrands);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Products
      </Typography>

      <Button variant="contained" onClick={() => setOpen(true)}>
        New Product
      </Button>
      <Box sx={flexCenter} mt={3}>
        {/* // ? select brandsları gruplamak için */}
        <MultiSelectBox
          handleSelect={(item) => setSelectedBrands(item)}
          placeholder="Select Brand"
        >
          {/* //?Brands isimlerini yazdırmak için */}
          {brands?.map((item) => (
            <MultiSelectBoxItem
              key={item.name}
              value={item.name}
              text={item.name}
            />
          ))}
        </MultiSelectBox>

        {/* //? Bu select ürünleri seşmek için (aynı isimlileri ) */}
        <MultiSelectBox
          handleSelect={(item) => setSelectedProducts(item)}
          placeholder="Select Product"
        >
          {/* //? seçilen markanın ürünlrini döndürür */}
          {filtredProducts?.map((item) => (
            <MultiSelectBoxItem key={item} value={item} text={item} />
          ))}
        </MultiSelectBox>
      </Box>

      <ProductModal
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
      />

      {sortedData?.length > 0 && (
        <TableContainer component={Paper} sx={{ mt: 3 }} elevation={10}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">#</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">
                  <Box
                    sx={arrowStyle}
                    onClick={() => handleSort("brand", "text")}
                  >
                    <div>Brand</div>
                    {columns.brand === 1 && <UpgradeIcon />}
                    {columns.brand !== 1 && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={arrowStyle}
                    onClick={() => handleSort("name", "text")}
                  >
                    <div>Name</div>
                    {columns.name === 1 && <UpgradeIcon />}
                    {columns.name !== 1 && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={arrowStyle}
                    onClick={() => handleSort("stock", "number")}
                  >
                    <div>Stock</div>
                    {columns.stock === 1 && <UpgradeIcon />}
                    {columns.stock !== 1 && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">Operation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData
                // ! Bu filter sortedData dan seçtiğimiz brands leri map e gönderir
                ?.filter((item) => isBrandSelected(item))
                .filter((item) => isProductSelected(item))
                .map((product, index) => (
                  <TableRow
                    key={product.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="center">{product.category}</TableCell>
                    <TableCell align="center">{product.brand}</TableCell>
                    <TableCell align="center">{product.name}</TableCell>
                    <TableCell align="center">{product.stock}</TableCell>
                    <TableCell
                      align="center"
                      onClick={() => deleteProduct(product.id)}
                    >
                      <DeleteIcon sx={btnHoverStyle} />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Firms;
