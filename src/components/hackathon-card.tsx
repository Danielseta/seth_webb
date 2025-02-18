import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  title: str
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 fl
      </div>
      {links && links.length > 0 && (
        <div classNarap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
            
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
