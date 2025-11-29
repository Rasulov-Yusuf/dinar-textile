import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function FilterByGen() {
  return (
    <Select>
      <SelectTrigger className="w-[147px]! bg-white text-black! h-[66px]! text-lg rounded-fn!">
        <SelectValue placeholder="Ayollar" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Erkaklar</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
