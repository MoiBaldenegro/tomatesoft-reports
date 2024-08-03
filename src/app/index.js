import { useEffect } from "react";
import Main from "../store/main";
import { useReportsStore } from "../store/reports.store";

export default function Index() {
  const getReports = useReportsStore((state) => state.getReports);
  useEffect(() => {
    getReports();
  }, []);
  return <Main />;
}
