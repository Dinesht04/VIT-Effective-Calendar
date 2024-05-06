import Link from "next/link";
import AddEvent, { NewEvent } from "@/components/component/Add-event";
import ClassEdit from "./classedit/page";
import { Button } from "@/components/ui/button";
import { AdminPanel } from "@/components/component/admin-panel";

export default function Admin() {
    return (
     
      <div>
        <Link href='/login'><Button className="p-4 m-8" variant="destructive"><span className="text-2xl">← Logout</span></Button></Link>
        <h1 className="text-4xl font-bold mb-10 text-center">Welcome, Admin!</h1>
        <div className="flex justify-center">
          <div className="mr-4"><NewEvent/></div> 
          <div><AdminPanel/></div>
        </div>
      </div>
    
    );
  }
  