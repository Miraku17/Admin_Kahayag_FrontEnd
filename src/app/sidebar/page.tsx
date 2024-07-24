import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Home,
  LineChart,
  ShoppingCart,
  Briefcase,
  MessageSquare,
  Mail,
  Trello,
  CheckSquare,
  Calendar,
  Lock,
  LifeBuoy,
  FileText,
  AlertTriangle,
  Mail as MailIcon,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-background border-r">
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
              <LineChart className="mr-2 h-4 w-4" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Ecommerce
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Briefcase className="mr-2 h-4 w-4" />
              Project
            </Button>
          </div>
          <Separator />
          <div className="space-y-1 px-4">
            <h3 className="mb-2 text-sm font-medium">APPLICATION</h3>
            <Button variant="ghost" className="w-full justify-start">
              <MessageSquare className="mr-2 h-4 w-4" />
              Chat
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Trello className="mr-2 h-4 w-4" />
              Kanban
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <CheckSquare className="mr-2 h-4 w-4" />
              Task
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Calendar
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Briefcase className="mr-2 h-4 w-4" />
              Project
            </Button>
          </div>
          <Separator />
          <div className="space-y-1 px-4">
            <h3 className="mb-2 text-sm font-medium">PAGES</h3>
            <Button variant="ghost" className="w-full justify-start">
              <Lock className="mr-2 h-4 w-4" />
              Authentication
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <LifeBuoy className="mr-2 h-4 w-4" />
              Utility
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Invoice
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <AlertTriangle className="mr-2 h-4 w-4" />
              Error
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <MailIcon className="mr-2 h-4 w-4" />
              Email Template
            </Button>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;