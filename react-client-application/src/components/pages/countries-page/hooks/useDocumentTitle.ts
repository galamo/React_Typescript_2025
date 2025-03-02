import { useEffect } from "react";

export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

// function doSoemthng() {
//   const [first, setfirst] = useState(second);
// }
