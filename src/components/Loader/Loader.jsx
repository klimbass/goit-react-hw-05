import { ProgressBar } from "react-loader-spinner";

export default function Loader() {
  return (
    <ProgressBar
      visible={true}
      height="80"
      width="80"
      barColor="black"
      borderColor="black"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
