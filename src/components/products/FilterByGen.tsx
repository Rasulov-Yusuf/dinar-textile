import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[147px]! bg-white text-black! h-[66px]! text-lg rounded-fn!">
        <SelectValue placeholder="Ayollar" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value="apple">Erkaklar</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
