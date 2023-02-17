const Formatprice = ({price}) => {
    return Intl.NumberFormat("en_In", {
        style: "currency",
        currency: "VNĐ", 
        maximumFractionDigits: 2,

    }).format(price/100)
}
export default Formatprice;