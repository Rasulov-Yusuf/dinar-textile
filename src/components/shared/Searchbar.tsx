import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Search } from "lucide-react";

export default function Searchbar() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="px-0! hover:bg-transparent cursor-pointer">
          <Search className="size-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle hidden></DialogTitle>
          <DialogDescription>Qidiruv.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Input id="search" defaultValue="" />
          </div>
          <DialogFooter className="sm:justify-start">
            <Button type="button" variant="secondary">
              Qidirish
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
