import { EventList } from "@/components/component/event-list";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EventView() {
  
    return (
     
      <div>
        <Link href='/assets/22MIM10133.html'><Button className="p-4 m-8" variant="destructive"><span className="text-2xl">← Back</span></Button></Link>
        <EventList />
      </div>
    
    );
  }