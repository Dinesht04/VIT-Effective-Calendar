import Link from "next/link";

export default function Admin() {
    return (
     
      <div>
        <h1>Admin Panel</h1>
        <h1><Link href='/login/admin/addevent'>Add Events</Link></h1>
        <h1><Link href='/login/admin/classedit'>Edit Classes</Link></h1>
      </div>
    
    );
  }
  