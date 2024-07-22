import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator";
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-background border-r ml-5">
      <ScrollArea className="h-full">
        <div className="space-y-4 py-4">
          <h2 className="mb-2 px-4 text-xl font-bold">Kahayag Admin</h2>
          <Separator />
          <div className="space-y-1 px-4">
            <h3 className="mb-2 text-sm font-medium">MENU</h3>
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Ecommerce
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Project
            </Button>
          </div>
          <Separator />
          <div className="space-y-1 px-4">
            <h3 className="mb-2 text-sm font-medium">APPLICATION</h3>
            <Button variant="ghost" className="w-full justify-start">
              Chat
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Email
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Kanban
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Task
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Calendar
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Project
            </Button>
          </div>
          <Separator />
          <div className="space-y-1 px-4">
            <h3 className="mb-2 text-sm font-medium">PAGES</h3>
            <Button variant="ghost" className="w-full justify-start">
              Authentication
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Utility
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Invoice
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Error
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Email Template
            </Button>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
