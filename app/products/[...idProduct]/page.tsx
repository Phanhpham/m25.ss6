import React from "react";
interface Params {
  idProduct: string;
}
interface Props {
  params: any;
}
export default function page(props: Props) {
  console.log("props", props);
  const { params } = props;
  return <div>trang chi tiet san pham co id la {params.idProduct[0]}:!</div>;
}
