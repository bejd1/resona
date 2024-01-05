import { Input } from "@/components/ui/input";

export function InputWithLabel() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input className="h-12" type="email" id="email" placeholder="Email" />
    </div>
  );
}
