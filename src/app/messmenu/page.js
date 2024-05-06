import { MessMenu } from "@/components/component/mess-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Menu() {
  
    return (
     
      <div>
        <Link href='/assets/22MIM10133.html'><Button className="p-4 m-8" variant="destructive"><span className="text-2xl">← Back</span></Button></Link>
         <MessMenu/>
      </div>
    
    );
  }