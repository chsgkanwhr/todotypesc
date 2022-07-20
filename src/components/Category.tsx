import { useRecoilState } from "recoil";
import { Categories, categoryState } from "./atoms";

function MyCategory() {
  return <option value={Categories.TO_DO}></option>;
}

//제출을위해 추후 업데이트 저기에 값넣는거 ({seleted}: type) 이형식
//찾아내서 풀어

export default MyCategory;
