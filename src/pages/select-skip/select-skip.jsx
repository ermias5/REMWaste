import SelectSkipHeader from "../../components/select-skip/select-skip-header";
import SelectSkipSection from "../../components/select-skip/select-skip-section";

export default function SelectSkip() {
  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col items-center gap-5 ">
        <SelectSkipHeader />
        <SelectSkipSection />
      </div>
    </div>
  );
}
