import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function SertificateDialog({
  data,
}: {
  data: { id: number; image: string };
}) {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Image src={data.image} alt="sertificate" fill />
        </DialogTrigger>
        <DialogContent showCloseButton={false} className="flex! items-center justify-center! bg-transparent! border-0! shadow-none!">
          <DialogHeader hidden>
            <DialogTitle hidden></DialogTitle>
            <DialogDescription
              hidden
              className="h-101 rounded-fn w-[284px]! flex items-center justify-center"
            ></DialogDescription>
          </DialogHeader>
          <Image src={data.image} alt="sertificate" width={284} height={405} />
        </DialogContent>
      </Dialog>
    </>
  );
}
