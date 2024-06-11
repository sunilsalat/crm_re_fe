import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


export function RecentSales() {
  return (
    <div className="space-y-8 overflow-auto">

      {/* <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
          <p className="text-sm text-muted-foreground">
            olivia.martin@email.com
          </p>
        </div>
        <div className="ml-auto font-medium bg-yellow-300 text-yellow-800 rounded-sm px-2">Cold</div>
      </div> */}
      
      <div className="flex items-center">
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
          <p className="text-sm text-muted-foreground">
            olivia.martin@email.com
          </p>
        </div>
        <div className="ml-auto font-medium bg-red-300 text-red-800 rounded-sm px-2">Hot</div>
      </div>

      <div className="flex items-center">
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
          <p className="text-sm text-muted-foreground">
            olivia.martin@email.com
          </p>
        </div>
        <div className="ml-auto font-medium bg-red-300 text-red-800 rounded-sm px-2">Hot</div>
      </div>

      <div className="flex items-center">
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
          <p className="text-sm text-muted-foreground">
            olivia.martin@email.com
          </p>
        </div>
        <div className="ml-auto font-medium bg-red-300 text-red-800 rounded-sm px-2">Hot</div>
      </div>

      <div className="flex items-center">
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
          <p className="text-sm text-muted-foreground">
            olivia.martin@email.com
          </p>
        </div>
        <div className="ml-auto font-medium bg-red-300 text-red-800 rounded-sm px-2">Hot</div>
      </div>
      
    </div>
  )
}
