import { NumericFormat } from "react-number-format";

function ProductDetailPrice(props) {
  return (
    <>
      {props.productsale != null ? (
        <>
          <var className="price h4">
            <NumericFormat
              value={props.productsale.pricesale}
              displayType={"text"}
              thousandSeparator={true}
              decimalScale={0}
              prefix={"$"}
              style={{ color: "#cc3333" }}
            />
          </var>
          <strike className="text-muted">
            <NumericFormat
              value={props.price}
              displayType={"text"}
              thousandSeparator={true}
              decimalScale={0}
              prefix={"USD "}
              style={{ color: "#939393" }}
            />
          </strike>
        </>
      ) : (
        <var className="price h4">
          <NumericFormat
            value={props.price}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={0}
            prefix={"$"}
          />
        </var>
      )}
    </>
  );
}

export default ProductDetailPrice;
