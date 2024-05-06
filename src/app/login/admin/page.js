import Link from "next/link";
import AddEvent from "@/components/component/Add-event";
import  AdminPanel  from "@/components/component/admin-panel";
import ClassEdit from "./classedit/page";
import { Button } from "@/components/ui/button";

export default function Admin() {
    return (
     
      <div>
        <Link href='/login'><Button className="p-4 m-8" variant="destructive"><span className="text-2xl">← Logout</span></Button></Link>
        <h1 className="text-4xl font-bold mb-10 text-center">Welcome, Admin!</h1>
        <div className="flex justify-center">
        <AddEvent />
        <ClassEdit/>
        </div>
      </div>
    
    );
  }
  