import SearchInput from "../../components/SearchInput";

export default function SearchPage() {
  return (
    <div className="absolute inset-0 p-2 bg-black rounded-xl md:my-4">
      <div className="flex flex-col pt-16">
        <SearchInput
          className="self-center w-sm"
          placeholder="What do you want to watch?"
        />
      </div>
    </div>
  );
}
