import { useRecoilState } from "recoil";
import { CurrentPageState } from "Store";
const useCurrentPage = () => {
  const [currentPage, setCurrentPage] = useRecoilState(CurrentPageState);
  return { currentPage, setCurrentPage };
};
export default useCurrentPage;
